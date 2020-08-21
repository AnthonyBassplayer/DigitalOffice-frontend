import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';


const adminRoutes: Routes = [
    { path: '', redirectTo: 'new-employee', pathMatch: 'full'},
    { 
        path: '', 
        component: AdminComponent,
        children: [
            { path: 'new-employee', component: NewEmployeeComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }