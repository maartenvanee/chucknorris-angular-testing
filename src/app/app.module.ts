import { ChucknorrisModule } from './chucknorris/chucknorris.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ChucknorrisModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
