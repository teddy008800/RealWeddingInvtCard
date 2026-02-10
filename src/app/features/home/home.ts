import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GoogleApiService, Wish, WishPayload } from '../../core/services/google-api.service';

interface Wishh {
  name?: string;
  wish?: string;
  state?: 'enter' | 'leave';
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  @ViewChild('gasFrame') gasFrame!: ElementRef<HTMLIFrameElement>;

  formSlug = "aqil-syafiqah";
  formCreatedAt: Date = new Date;
  formFullname: string = "";
  formFNumber: string = "";
  formNumberGuest: string = "";
  formAttendance: string = "";
  formWish: string = "";

  // ================= Countdown =================
  weddingDate = new Date('2026-05-30T11:00:00').getTime();
  countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };
  interval!: any;

  // ================= Wishes =================

  visibleWishes: Wishh[] = [];
  wishIndex = 0;
  wishesGet: Wish[] = [];

  constructor(private wishService: GoogleApiService) { }


  ngOnInit(): void {
    this.startCountdown();
    this.loadWishes();
    this.onEventReceiveMessage();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onEventReceiveMessage() {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://script.google.com') return;

      if (event.data?.status === 'ok') {
        console.log('Wish saved!');

        this.loadWishes();
      }
    });
  }


  loadWishes() {
    this.wishService.getWishes().subscribe(data => {
      this.wishesGet = data.reverse(); // newest first

      this.startWishRotation();
    });
  }

  submitWish() {
    //if (!this.formWish.trim()) return;

    //let payload: WishPayload = {
    //  name: this.formFullname,
    //  wish: this.formWish
    //};

    //this.wishService.submitWish(payload).subscribe(() => {
    //  //this.wishesGet.unshift({ timestamp: this.formCreatedAt.toISOString(), name: this.formFullname, wish: this.formWish });

    //  this.loadWishes();
    //});

    this.gasFrame.nativeElement.contentWindow?.postMessage(
      {
        name: this.formFullname,
        wish: this.formWish
      },
      'https://script.google.com'
    );
  }

  //submitWish() {
  //  this.http.post('/api/wish', {
  //    name: this.formFullname,
  //    wish: this.formWish
  //  }).subscribe({
  //    next: res => {
  //      console.log('Saved:', res);
  //    },
  //    error: err => {
  //      console.error('Failed:', err);
  //    }
  //  });
  //}

  startCountdown() {
    this.interval = setInterval(() => {
      const now = Date.now();
      const diff = this.weddingDate - now;

      if (diff <= 0) return;

      this.countdown.days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      this.countdown.hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      this.countdown.minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      this.countdown.seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    }, 1000);
  }

  startWishRotation() {
    this.visibleWishes = this.wishesGet.slice(0, 3).map(w => ({
      ...w,
      state: 'enter'
    }));

    setInterval(() => {
      this.visibleWishes[0].state = 'leave';

      setTimeout(() => {
        this.visibleWishes.shift();

        let nextWish = {
          ...this.wishesGet[this.wishIndex % this.wishesGet.length],
          state: 'enter' as const
        };

        this.visibleWishes.push(nextWish);
        this.wishIndex++;

      }, 600);

    }, 4000);
  }

  addToCalendar() {
    const url =
      'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=Sarah%20%26%20Ahmad%20Wedding' +
      '&dates=20250315T110000/20250315T160000' +
      '&location=Grand%20Ballroom%2C%20Majestic%20Hotel';

    window.open(url, '_blank');
  }

  onAttendanceChange(evt: any) {
    this.formAttendance = evt.target.value;
  }
}
