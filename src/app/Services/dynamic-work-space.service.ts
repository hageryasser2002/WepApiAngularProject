import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpace } from '../Models/ISpaces';

@Injectable({
  providedIn: 'root'
})
export class DynamicWorkSpaceService {

  baseURl: string = "http://localhost:5143/api/Spaces";

  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJqdGkiOiIwYTIzNzczMC1hNzMxLTQxYTQtOGI3ZS0wOGM2NTJiMGM1YjkiLCJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIkZ1bGxOYW1lIjoic2FyYSB5YXNzZXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTc0ODkwMzA4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3OTYwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.-7mnjzBrUR6cRhXKmvCzjxpQHklnBn3F9XK6a2hL6bA';

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getAllSpace(): Observable<ISpace[]> {
    return this.http.get<ISpace[]>(this.baseURl, { headers: this.getAuthHeaders() });
  }

  addNewSpace(space: any): Observable<ISpace> {
    return this.http.post<ISpace>(this.baseURl, space, { headers: this.getAuthHeaders() });
  }

  editSpace(spaceId: any, space: any) {
    return this.http.put(`${this.baseURl}/${spaceId}`, space, { headers: this.getAuthHeaders() });
  }

  deleteSpace(spaceId: any) {
    return this.http.delete(`${this.baseURl}/${spaceId}`, { headers: this.getAuthHeaders() });
  }

  getSpaceById(spaceId: string): Observable<ISpace> {
    return this.http.get<ISpace>(`${this.baseURl}/${spaceId}`, { headers: this.getAuthHeaders() });
  }
}
