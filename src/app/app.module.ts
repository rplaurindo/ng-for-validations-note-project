// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App imports
import { AppComponent } from './app.component';
import { ErrorsModule } from './modules/errors.module';
import { ExamplesModule } from './modules/examples.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ExamplesModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
