import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WhatIsAngularComponent } from './pages/what-is-angular/what-is-angular.component';
import { WhatIsSpaComponent } from './pages/what-is-spa/what-is-spa.component';
import { AngularArcitectureComponent } from './pages/angular-arcitecture/angular-arcitecture.component';
import { WhatIsTypescriptComponent } from './pages/what-is-typescript/what-is-typescript.component';
import { DifferencesSpaTraditionalComponent } from './pages/differences-spa-traditional/differences-spa-traditional.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    WhatIsAngularComponent,
    WhatIsSpaComponent,
    AngularArcitectureComponent,
    WhatIsTypescriptComponent,
    DifferencesSpaTraditionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
