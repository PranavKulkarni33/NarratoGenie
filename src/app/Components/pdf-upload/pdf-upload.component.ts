import { Component } from '@angular/core';
import { PdfParserService } from 'src/app/Services/pdf-parser.service';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.css'],
})
export class PdfUploadComponent {
  fileName: string | null = null;
  selectedFile: File | null = null;
  pdfContent: string | null = null;

  constructor(private pdfParserService: PdfParserService) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.setFile(files[0]);
    }
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.setFile(input.files[0]);
    }
  }

  setFile(file: File): void {
    if (file.type === 'application/pdf') {
      this.selectedFile = file;
      this.fileName = file.name;
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  processPDF(): void {
    if (this.selectedFile) {
      this.pdfParserService.parsePDF(this.selectedFile).subscribe({
        next: (content) => {
          this.pdfContent = content; // Set the extracted content
          console.log('Extracted PDF Content:', this.pdfContent); // Log the content
        },
        error: (err) => {
          console.error('Error extracting PDF content:', err);
        },
      });
    }
  }
}
