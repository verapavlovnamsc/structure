import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material-module';
import { MenusuitComponent } from './menusuit/menusuit.component';
import { MenujacketComponent } from './menujacket/menujacket.component';

import { CoatItemComponent } from './coat-item/coat-item.component';
import { MenucoatComponent } from './menucoat/menucoat.component';
import { HttpClientModule } from '@angular/common/http';
import { CoatItemDescriptionComponent } from './coat-item-description/coat-item-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MenusuitComponent,
    MenujacketComponent,
    MenucoatComponent,
    CoatItemComponent,
    CoatItemDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
