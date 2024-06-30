import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NumbersSectionComponent } from './numbers-section/numbers-section.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { DashboardSectionComponent } from './dashboard-section/dashboard-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { FooterComponent } from './footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeRegistryComponent } from './theme-registry/theme-registry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    NumbersSectionComponent,
    FeatureSectionComponent,
    DashboardSectionComponent,
    TestimonialsSectionComponent,
    FooterComponent,
    ThemeRegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
