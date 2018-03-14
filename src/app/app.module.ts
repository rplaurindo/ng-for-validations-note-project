// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './modules/errors.module';
import { ExamplesModule } from './modules/examples.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ExamplesModule,
    ErrorsModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
