import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interactive-narrative',
  templateUrl: './interactive-narrative.component.html',
  styleUrls: ['./interactive-narrative.component.css']
})
export class InteractiveNarrativeComponent {
  constructor(private router: Router) {}

  navigateToUpload(): void {
    this.router.navigate(['/upload']);
  }

}
