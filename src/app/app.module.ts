import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatListModule, MatProgressBarModule, MatSidenavModule, MatTableModule,
  MatTabsModule, MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import { PhotoMeComponent } from './personal/about-me/photo-me/photo-me.component';
import { LayoutComponent } from './core/layout/layout.component';
import { NameHeaderComponent } from './personal/about-me/name-header/name-header.component';
import { DescriptionComponent } from './personal/about-me/description/description.component';
import { SkillsComponent } from './personal/skills/skills.component';
import { SkillProgressComponent } from './personal/skills/skill-progress/skill-progress.component';
import { CvDownloadComponent } from './personal/cv-download/cv-download.component';
import { FooterComponent } from './core/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CareerComponent } from './personal/career/career.component';
import { HobbiesComponent } from './personal/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoMeComponent,
    LayoutComponent,
    NameHeaderComponent,
    DescriptionComponent,
    SkillsComponent,
    SkillProgressComponent,
    CvDownloadComponent,
    FooterComponent,
    CareerComponent,
    HobbiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
