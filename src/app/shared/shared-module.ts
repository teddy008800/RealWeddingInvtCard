import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { CountdownTimer } from './components/countdown-timer/countdown-timer';

@NgModule({
  declarations: [
    Navbar,
    Footer,
    CountdownTimer
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Navbar,
    Footer,
    CountdownTimer,  // 🔑 export it here
    CommonModule             // so feature modules get common directives too
  ]
})
export class SharedModule { }
