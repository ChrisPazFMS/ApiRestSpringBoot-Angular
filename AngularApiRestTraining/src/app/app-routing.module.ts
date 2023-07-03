import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { UpdeteTrainingComponent } from './component/updete-training/updete-training.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent },
  { path: 'updete-training', component: UpdeteTrainingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
