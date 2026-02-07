import { Component } from '@angular/core';
import { GoogleApiService } from '../../core/services/google-api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  weddingDate = new Date('2026-12-12T11:00:00');
  

  constructor(
    private api: GoogleApiService
  ) { }

  getInvt() {
    this.api.getInvitation('aqil-syafiqah')
      .subscribe(data => {
        console.log("Invitation:", data);
        // populate UI with guest invitation data
      });
  }
}
