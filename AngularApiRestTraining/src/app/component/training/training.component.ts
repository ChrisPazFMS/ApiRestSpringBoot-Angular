import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent {
  @Input() training: Training;
  @Output() updateTraining: EventEmitter<Training> = new EventEmitter();
  constructor(private trainingService: TrainingService) {
    this.training = new Training();
  }

  onUpdateTraining(): void {
    this.updateTraining.emit(this.training);
  }
}
