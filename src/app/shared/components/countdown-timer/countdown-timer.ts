import { Component, Input, OnInit } from '@angular/core';
import { CountdownService } from '../../../core/services/countdown.service';

@Component({
  selector: 'app-countdown-timer',
  standalone: false,
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.css',
})
export class CountdownTimer implements OnInit{
  @Input() weddingDate!: Date;
  timeLeft: any;

  constructor(private countdown: CountdownService) { }

  ngOnInit() {
    setInterval(() => {
      this.timeLeft = this.countdown.getTimeLeft(this.weddingDate);
    }, 1000);
  }
}
