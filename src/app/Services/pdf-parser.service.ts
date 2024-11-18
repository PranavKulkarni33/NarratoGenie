import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as pdfjsLib from 'pdfjs-dist';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PdfParserService {
  constructor(private http: HttpClient) {
    // Set the worker source to the correct location
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  }

  parsePDF(file: File): Observable<string> {
    return from(file.arrayBuffer()).pipe(
      switchMap((arrayBuffer) => {
        const pdf = pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        return from(pdf).pipe(
          switchMap((pdfDoc) => {
            const totalPages = pdfDoc.numPages;
            let content = '';

            // Read each page's text content
            const pagePromises = [];
            for (let i = 1; i <= totalPages; i++) {
              pagePromises.push(
                pdfDoc.getPage(i).then((page) =>
                  page.getTextContent().then((textContent) => {
                    textContent.items.forEach((item: any) => {
                      content += item.str + ' ';
                    });
                    content += '\n';
                  })
                )
              );
            }

            return from(Promise.all(pagePromises)).pipe(switchMap(() => of(content)));
          })
        );
      })
    );
  }

  parseAndSendPDF(file: File): Observable<any> {
    return this.parsePDF(file).pipe(
      switchMap((content) =>
        this.http.post('https://your-backend-endpoint/summarize', { content })
      )
    );
  }
}
