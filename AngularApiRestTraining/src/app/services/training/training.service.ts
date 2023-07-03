import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/app/environment/environment';
import { Training } from 'src/app/models/training';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(private http: HttpClient) {}

  postTraining(training: Training): Observable<any> {
    const formData = new FormData();
    formData.append('name', training.name);
    formData.append('description', training.description);
    formData.append('price', training.price.toString());
    formData.append('quantity', training.quantity.toString());
    formData.append('imagePath', training.imagePath);

    return this.http.post(environment.host + '/trainings', formData);
  }
  // Fonctionne
  // postTraining(training: Training): Observable<Training> {
  //   return this.http.post<Training>(environment.host + '/trainings', training);
  // }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(environment.host + '/trainings');
  }

  getTrainingById(id: number): Observable<Training> {
    return this.http.get<Training>(environment.host + '/training' + id);
  }
}
