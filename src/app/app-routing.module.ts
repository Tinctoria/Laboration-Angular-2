import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { KontaktFormComponent } from './about-me/kontakt-form/kontakt-form.component';
import { AngularArcitectureComponent } from './pages/angular-arcitecture/angular-arcitecture.component';
import { DifferencesSpaTraditionalComponent } from './pages/differences-spa-traditional/differences-spa-traditional.component';
import { WhatIsAngularComponent } from './pages/what-is-angular/what-is-angular.component';
import { WhatIsSpaComponent } from './pages/what-is-spa/what-is-spa.component';
import { WhatIsTypescriptComponent } from './pages/what-is-typescript/what-is-typescript.component';

const routes: Routes = [
  {path: 'home', component: AboutMeComponent, children: [
    { path: 'kontakt-form', component: KontaktFormComponent}
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'what-is-angular', component: WhatIsAngularComponent},
  {path: 'what-is-spa', component: WhatIsSpaComponent},
  {path: 'angular-architecture', component: AngularArcitectureComponent},
  {path: 'what-is-typescript', component: WhatIsTypescriptComponent},
  {path: 'differences-spa-vs-traditional', component: DifferencesSpaTraditionalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
