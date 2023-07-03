import { Component, OnInit, ViewChild } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  @ViewChild('resetFormSave', { static: false }) resetFormSave: any;
  trainings: Training[] = [];
  training: Training = new Training();
  error!: string;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.showTrainings();
  }

  showTrainings(): void {
    this.trainingService.getTrainings().subscribe({
      next: (data: Training[]) => {
        this.trainings = data;
      },
      error: (error) => {
        this.error =
          "Une erreur s'est produite lors du chargement des articles. /n" +
          error;
      },
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.training.imagePath = file;
  }

  saveTraining(): void {
    this.trainingService.postTraining(this.training).subscribe({
      next: () => {
        console.log('Formation enregistrée avec succès');
        // this.showTrainings();
        setTimeout(() => {
          this.showTrainings();
          this.resetForm();
        }, 500);

        // Réinitialiser les champs
      },
      error: (error: string) => {
        this.error =
          "Erreur lors de l'enregistrement de la formation. \n" + error;
        this.showTrainings();
      },
    });
  }

  /**
   * Réinitialiser les champs du formulaire de création de cour.
   */
  resetForm(): void {
    this.resetFormSave.reset();
  }
}
