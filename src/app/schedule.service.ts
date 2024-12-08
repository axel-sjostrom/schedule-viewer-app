//Stället där API-data laddas in

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available app-wide
})
export class ScheduleService {
  private apiUrl = 'https://dev-backend.royalschedule.com/schedules'; // API endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch schedules
  getSchedules(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}