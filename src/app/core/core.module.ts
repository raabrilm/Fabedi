import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig } from './components/home/main-banner/main-banner.component';


@NgModule({
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    NgbdCarouselConfig   
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
