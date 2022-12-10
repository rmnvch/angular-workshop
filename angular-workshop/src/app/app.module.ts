import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { ContactBlockComponent } from './components/contact-block/contact-block.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ClientDialogComponent } from './components/client-dialog/client-dialog.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientsComponent,
    AboutComponent,
    NotFoundComponent,
    NavComponent,
    SearchBarComponent,
    ClientsTableComponent,
    ContactBlockComponent,
    DialogComponent,
    ClientDialogComponent,
    ClientFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
