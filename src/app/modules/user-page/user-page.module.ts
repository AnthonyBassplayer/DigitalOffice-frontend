import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from '../admin/admin.module';
import { SharedModule } from '../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { TagsBlockComponent } from './components/tags-block/tags-block.component';
import { DateDescComponent } from './components/date-desc/date-desc.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ChartComponent } from './components/chart/chart.component';
import { AddHoursComponent } from './components/add-hours/add-hours.component';
import { GradientGraphicsComponent } from './components/gradient-graphics/gradient-graphics.component';
import { UserTasksComponent } from './components/user-tasks/user-tasks.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/project/task/task.component';
import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { AdminGuard } from 'src/app/guards/admin.guard';



@NgModule({
  declarations: [
    UserPageComponent,
    TagsBlockComponent,
    DateDescComponent,
    AttendanceComponent,
    ChartComponent,
    AddHoursComponent,
    GradientGraphicsComponent,
    UserTasksComponent,
    ProjectComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminModule,
    NgbDatepickerModule,
    UserPageRoutingModule
  ],
  providers:[
    AdminGuard
  ]
})
export class UserPageModule { }
