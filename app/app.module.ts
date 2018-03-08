import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ImgComponent } from './img.component';

@NgModule({
    imports:      [ 
        BrowserModule 
    ],
    declarations: [ 
        AppComponent,
        ImgComponent
    ],
    bootstrap: [ AppComponent, ImgComponent ]
})
export class AppModule { }
