import { Component } from '@angular/core';
import { PdfParserService } from 'src/app/Services/pdf-parser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.css'],
})
export class PdfUploadComponent {
  fileName: string | null = null;
  selectedFile: File | null = null;
  isLoading: boolean = false;

  constructor(private pdfParserService: PdfParserService, private router: Router) {}

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
      this.isLoading = true;
      this.pdfParserService.parseAndProcessPDF(this.selectedFile).subscribe({
        next: (response) => {
          this.isLoading = false;
          const videoUrl = response.videoUrl;
          this.router.navigate(['/preview'], { queryParams: { video: videoUrl } });
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error processing PDF:', err);
          alert('Failed to process the PDF. Please try again.');
        },
      });
    }
  }

  toggleMute(video: HTMLVideoElement): void {
    video.muted = !video.muted;
  }

  back(){
    this.router.navigate(['home']);
  }
}
