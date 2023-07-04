import { Component, OnInit, ViewChild } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { environment } from 'src/app/environment/environment';
import { Router } from '@angular/router';

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
  public localhost: string = environment.localhost;

  constructor(
    private trainingService: TrainingService,
    private router: Router
  ) {}

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

  deleteTraining(training: Training): void {
    this.trainingService.deleteTraining(training.id).subscribe(
      () => {
        console.log('Formation supprimée avec succès');
        this.showTrainings();
      },
      (error) =>
        console.error(
          "Une erreur s'est produite lors de la suppression de la formation.",
          error
        )
    );
  }

  updateTraining(training: Training): void {
    this.trainingService.setSelectedTraining(training);
    this.router.navigate(['/updete-training']);
  }

  /**
   * Réinitialiser les champs du formulaire de création de cour.
   */
  resetForm(): void {
    this.resetFormSave.reset();
  }
}
