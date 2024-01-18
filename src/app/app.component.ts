import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './service/country.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryHomeComponent } from './country-home/country-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    CountryHomeComponent,
    NavbarComponent,
    FooterComponent,
    CountryDetailComponent,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CountryService],
})
export class AppComponent {}
