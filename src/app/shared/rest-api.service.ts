import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from '../shared/Personne';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:8081/annuaire-0.0.1-SNAPSHOT';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch personne list
  getPersonnes(): Observable<Personne> {
    return this.http
      .get<Personne>(this.apiURL + '/rest/personne/api/personnes')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch personne
  getPersonne(id: any): Observable<Personne> {
    return this.http
      .get<Personne>(this.apiURL + '/rest/personne/api/personne/id/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create personne
  createPersonne(personne: any): Observable<Personne> {
    return this.http
      .post<Personne>(
        this.apiURL + '/rest/personne/api/personne',
        JSON.stringify(personne),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update personne
  updatePersonne(id: any, personne: any): Observable<Personne> {
    return this.http
      .put<Personne>(
        this.apiURL + '/rest/personne/api/personne/' + id,
        JSON.stringify(personne),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete personne
  deletePersonne(id: any) {
    return this.http
      .delete<Personne>(this.apiURL + '/rest/personne/api/personne/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}