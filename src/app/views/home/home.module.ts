import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home-routing.module';

import { NgxEchartsModule } from 'ngx-echarts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NguCarouselModule } from '@ngu/carousel';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

import {
    StatisticsGraphComponent,
    MiniCalendarComponent,
    TodoListComponent,
    BrowserUsageComponent,
    AppointmentsComponent
} from "./components";

import {
    PageOneComponent,
    PageTwoComponent
} from './container';

const HomeModuleComponents = [
    PageOneComponent,
    PageTwoComponent,
    StatisticsGraphComponent,
    MiniCalendarComponent,
    TodoListComponent,
    BrowserUsageComponent,
    AppointmentsComponent,
]

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule.forChild(HomeRoutes),
        FormsModule,
        FlexLayoutModule,
        NgxEchartsModule,
        CarouselModule,
        NguCarouselModule,
        MatCardModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        MatMenuModule,
        MatExpansionModule,
    ],
    declarations: [HomeComponent, ...HomeModuleComponents],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HomeModule { }
