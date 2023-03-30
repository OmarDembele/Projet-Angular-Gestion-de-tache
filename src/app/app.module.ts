import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheComponent } from './tache/tache.component';
import { AjoutTacheComponent } from './ajout-tache/ajout-tache.component';
import { ListeTacheComponent } from './liste-tache/liste-tache.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { TacheExecuterComponent } from './tache-executer/tache-executer.component';

const appRoutes: Routes=[
  {path:'Tache/:id', component:TacheComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TacheComponent,
    AjoutTacheComponent,
    ListeTacheComponent,
    TacheExecuterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
