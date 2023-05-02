import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DropComponent } from './drop/drop.component';

import { DragDropModule } from '@angular/cdk/drag-drop'
@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
