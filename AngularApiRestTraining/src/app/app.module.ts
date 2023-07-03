import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './component/trainings/trainings.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TrainingComponent } from './component/training/training.component';
import { UpdeteTrainingComponent } from './component/updete-training/updete-training.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    TrainingComponent,
    UpdeteTrainingComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
