import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './service/country.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryHomeComponent } from './country-home/country-home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,CountryHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CountryService],
})
export class AppComponent{
  
}
