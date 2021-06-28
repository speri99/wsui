import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './mentor.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { EmploymentsComponent } from './employments/employments.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";


const routes:Routes=[
  {
    path:"dashboard",
    component:LoginComponent
  },
  {
    path:"",
    component:MentorComponent,
    children:[
      {
        path:"overview",
        component:OverviewComponent
      },
      {
        path:"experience",
        component:EmploymentsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [OverviewComponent, MentorComponent, ProjectsComponent, EmploymentsComponent, ExpertiseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MentorModule { }
