// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App imports
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { ErrorsModule } from './modules/errors.module';
import { ExamplesModule } from './modules/examples.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ROUTING,
    BrowserModule,
    ExamplesModule,
    ErrorsModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
