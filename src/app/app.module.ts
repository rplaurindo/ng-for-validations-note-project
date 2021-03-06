import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ListExampleModule } from './components/examples/index';

import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './core/components/horizontal-menu/component';


@NgModule({
    imports: [
        AppRoutingModule
        , ListExampleModule
    ],
    declarations: [
        AppComponent
        , HorizontalMenuComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
