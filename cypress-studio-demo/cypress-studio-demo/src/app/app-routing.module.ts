import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '',
    component: GridComponent
  },
  {
    path: 'details',
    component: DetailsComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
