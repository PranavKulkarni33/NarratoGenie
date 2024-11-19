import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  videoUrl: string | null = null;

  constructor(private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.videoUrl = params['video'];
    });
  }

  toggleMute(videoPlayer: HTMLVideoElement): void {
    videoPlayer.muted = !videoPlayer.muted;
  }

  downloadVideo(): void {
    if (this.videoUrl) {
      window.open(this.videoUrl, '_blank'); 
    }
  }

  navigateToUpload(): void {
    this.router.navigate(['/upload']);
  }
}
