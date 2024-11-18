import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfUploadComponent } from './Components/pdf-upload/pdf-upload.component';
import { PreviewComponent } from './Components/preview/preview.component';
import { InteractiveNarrativeComponent } from './Components/interactive-narrative/interactive-narrative.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PdfUploadComponent,
    PreviewComponent,
    InteractiveNarrativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
