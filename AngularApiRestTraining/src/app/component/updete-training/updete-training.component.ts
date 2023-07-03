import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environment/environment';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-updete-training',
  templateUrl: './updete-training.component.html',
  styleUrls: ['./updete-training.component.css'],
})
export class UpdeteTrainingComponent implements OnInit {
  @ViewChild('resetFormSave', { static: false }) resetFormSave: any;
  training!: Training;
  public hostImageTrainings: string = environment.localhost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.training = this.trainingService.getTrainingForUpdate();
  }

  getTraining(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.trainingService.getTrainingById(id).subscribe((training) => {
        this.training = training;
      });
    }
  }

  updateTraining(): void {
    this.trainingService.updateTraining(this.training).subscribe(() => {
      // Redirige vers la liste des trainings après la mise à jour
      this.router.navigate(['/trainings']);
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.training.imagePath = environment.updeteImage + file.name;
  }

  resetForm(): void {
    this.resetFormSave.reset();
  }
}
