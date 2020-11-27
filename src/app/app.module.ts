import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CourseListComponent} from './courses/couse-list.component'
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404.component';
import { CourseInfoComponet } from './courses/course-info.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        // em branco no path que dizer na raiz, esse termo é o objeto de rota
        path:'', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        // quando colocar no browse vai likar com outro componet
        path: 'courses', component: CourseListComponent
      },
   
      {
        // o id é um parametro do component
        path:'courses/info/:id',component: CourseInfoComponet
      },
      {
        path:'**', component:Error404Component
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
