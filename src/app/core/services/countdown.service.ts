import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  getTimeLeft(targetDate: Date) {
    const diff = targetDate.getTime() - new Date().getTime();

    return {
      days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
      seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
    };
  }
}
