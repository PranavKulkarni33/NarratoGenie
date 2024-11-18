import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfUploadComponent } from './Components/pdf-upload/pdf-upload.component';
import { PreviewComponent } from './Components/preview/preview.component';
import { InteractiveNarrativeComponent } from './Components/interactive-narrative/interactive-narrative.component';

const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
  { path: 'upload', component: PdfUploadComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'narrative', component: InteractiveNarrativeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
