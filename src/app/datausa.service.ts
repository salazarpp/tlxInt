import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Population } from './population';

@Injectable({
  providedIn: 'root'
})
export class DatausaService {
   dataUsaUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  constructor(private http: HttpClient) { }

  getPupulationData(): Observable<any> {
    return this.http.get<any>(this.dataUsaUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => new Error('API Error'));
  }
}
