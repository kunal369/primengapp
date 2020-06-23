import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import { MatListModule } from '@angular/material/list';
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';

import { HomeComponent } from './home/home.component';
import { CountrycountComponent } from './countrycount/countrycount.component';
import { GlobalcountComponent } from './globalcount/globalcount.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'countrycount',
    component: CountrycountComponent,
  },
  {
    path: 'globalcount',
    component: GlobalcountComponent,
  },
 {
    path: '**',
    component: PagenotfoundComponent,
  }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountrycountComponent,
    GlobalcountComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpModule,
    TableModule,
    PaginatorModule,
    AccordionModule,
    CardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
