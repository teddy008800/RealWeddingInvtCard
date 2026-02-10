import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Wish {
  slug?: string;
  name?: string;
  notel?: string;
  numguest?: string;
  attendance?: string;
  wish?: string;
  timestamp?: string;
}
export interface WishPayload {
  name: string;
  wish: string;
}

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


  getWishes(): Observable<Wish[]> {
    return this.http.get<Wish[]>(this.baseUrl);
  }

  addWish(wish: string, name?: string): Observable<any> {
    return this.http.post(this.baseUrl, { wish, name });
  }

  submitWish(payload: WishPayload) {
    const apiUrl =
      window.location.hostname === 'localhost'
        ? 'http://localhost:3000/api/wish'  // local dev
        : '/api/wish';  
    return this.http.post(apiUrl, payload);
  }
}
