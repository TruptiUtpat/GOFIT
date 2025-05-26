import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { FormsComponent } from './forms/forms.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: "page",
    component: PageComponent
  },
  {
    
    component: HomeComponent,
    path: "home"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    component: FormsComponent,
    path: "forms"
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
