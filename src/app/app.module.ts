import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CourseProjectComponent } from './course-project/course-project.component';
import { HomeComponent } from './home/home.component';
import { PlcComponent } from './plc/plc.component';
import { VideoItemComponent } from './video/video-item/video-item.component';
import { VideoService } from './video/video.service';
import { HmiComponent } from './hmi/hmi.component';
import { FuncSpecComponent } from './course-project/func-spec/func-spec.component';
import { IoDatabaseComponent } from './course-project/io-database/io-database.component';
import { ScopeOfWorkComponent } from './course-project/scope-of-work/scope-of-work.component';
import { CPPlcComponent } from './course-project/cp-plc/cp-plc.component';

import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CpHmiComponent } from './course-project/cp-hmi/cp-hmi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseProjectComponent,
    HomeComponent,
    PlcComponent,
    VideoItemComponent,
    HmiComponent,
    FuncSpecComponent,
    IoDatabaseComponent,
    ScopeOfWorkComponent,
    CPPlcComponent,
    CpHmiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [VideoService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
