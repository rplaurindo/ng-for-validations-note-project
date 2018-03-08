// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// App imports
import { AppComponent } from './app.component';
import { ErrorsModule } from './modules/errors.module';
import { ExamplesModule } from './modules/examples.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
