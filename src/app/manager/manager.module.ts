import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { MaterialModule } from '../material.module';

// const routes : Routes =[]
// export const managerModuleRoutes : Routes = [{path:'', component: ManagerHomeComponent}]

@NgModule({
  declarations: [
    ManagerHomeComponent,
  ],
  imports: [
    CommonModule,ManagerHomeComponent, MaterialModule,RouterModule,]
  //   RouterModule.forChild(routes)],
  // exports: [ RouterModule]
})
export class ManagerModule { }
