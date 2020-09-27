import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NumberDisplayComponent } from './components/number-display/number-display.component';
import { DialpadComponent } from './components/dialpad/dialpad.component';
import { CommonModule } from '@angular/common';
import { NumberGridComponent } from './components/number-grid/number-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { ContactFilterByPhone } from './pipes/contact-filter-by-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NumberDisplayComponent,
    DialpadComponent,
    NumberGridComponent,
    PhoneFormatPipe,
    ContactFilterByPhone
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
