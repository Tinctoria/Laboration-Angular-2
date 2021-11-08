import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AngularArcitectureComponent } from './pages/angular-arcitecture/angular-arcitecture.component';
import { DifferencesSpaTraditionalComponent } from './pages/differences-spa-traditional/differences-spa-traditional.component';
import { WhatIsAngularComponent } from './pages/what-is-angular/what-is-angular.component';
import { WhatIsSpaComponent } from './pages/what-is-spa/what-is-spa.component';
import { WhatIsTypescriptComponent } from './pages/what-is-typescript/what-is-typescript.component';

const routes: Routes = [
  {path: '', component: AboutMeComponent},
  {path: 'whatIsAngular', component: WhatIsAngularComponent},
  {path: 'whatIsSpa', component: WhatIsSpaComponent},
  {path: 'angularArchitecture', component: AngularArcitectureComponent},
  {path: 'whatIsTypescript', component: WhatIsTypescriptComponent},
  {path: 'differencesSPATraditional', component: DifferencesSpaTraditionalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
