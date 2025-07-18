import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalaxyComponent } from './galaxy/galaxy.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { PrettierDemoComponent } from './prettier-demo/prettier-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    GalaxyComponent,
    PrettierDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParallaxScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
