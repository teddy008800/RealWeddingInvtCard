import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  private baseUrl = "https://script.google.com/macros/s/AKfycbzUL2aV8yLPpMLd1YmoKsAGUUQgqEKO-qCrymtJVc6nVIZ_xfKEi25nTm-2l3uucM5t/exec";

  constructor(private http: HttpClient) { }

  getInvitation(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?slug=${slug}`);
  }

  submitRsvp(payload: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }
}
