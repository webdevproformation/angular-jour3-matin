import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

import { RouterModule } from "@angular/router";
import { ArticlesService } from './articles.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component : HomepageComponent},
      {path: "contact", component : ContactpageComponent},
    ])
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
