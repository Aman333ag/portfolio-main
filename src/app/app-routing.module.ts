import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LibrariesComponent } from './libraries/libraries.component';


const routes: Routes =
[
  { path: '', component: AppComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'cv', component: CurriculumVitaeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'libraries', component: LibrariesComponent }



];



@NgModule({
  imports: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
