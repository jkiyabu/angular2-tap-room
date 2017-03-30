import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { alcoholContentPipe } from './alcoholContent.pipe';
import { SellPintComponent } from './sell-pint/sell-pint.component';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    AddKegComponent,
    alcoholContentPipe,
    SellPintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
