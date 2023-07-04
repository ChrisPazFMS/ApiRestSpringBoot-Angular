import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/app/environment/environment';
import { Training } from 'src/app/models/training';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  selectedTraining!: Training;
  constructor(private http: HttpClient) {}

  private trainingForUpdate!: Training;

  setSelectedTraining(training: Training): void {
    this.trainingForUpdate = training;
  }

  getTrainingForUpdate(): Training {
    return this.trainingForUpdate;
  }

  postTraining(training: Training): Observable<any> {
    const formData = new FormData();
    formData.append('id', training.id);
    formData.append('name', training.name);
    formData.append('description', training.description);
    formData.append('price', training.price.toString());
    formData.append('quantity', training.quantity.toString());
    formData.append('imagePath', training.imagePath);

    return this.http.post(environment.host + '/trainings', formData);
  }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(environment.host + '/trainings');
  }

  getTrainingById(id: number): Observable<Training> {
    const url = environment.trainings + id;
    return this.http.get<Training>(url);
  }

  updateTraining(training: Training): Observable<Training> {
    const url = environment.training + training.id;
    return this.http.put<Training>(url, training);
  }

  deleteTraining(id: number): Observable<void> {
    const url = environment.training + id;
    return this.http.delete<void>(url);
  }
}
