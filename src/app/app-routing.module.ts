import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlcComponent} from './plc/plc.component';
import { HmiComponent } from './hmi/hmi.component';
import { CourseProjectComponent } from './course-project/course-project.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'plc', component: PlcComponent },
    { path: 'hmi', component: HmiComponent },
    { path: 'course-project', component: CourseProjectComponent }
];

@NgModule( {
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}