import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import {
    PageOneComponent,
    PageTwoComponent
} from './container';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'page-one'
            },
            {
                path: 'page-one',
                component: PageOneComponent
            },
            {
                path: 'page-two',
                component: PageTwoComponent
            }
        ]
    },
];
