import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { CountdownTimer } from './components/countdown-timer/countdown-timer';
import { Modal } from './components/modal/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Navbar,
    Footer,
    CountdownTimer,
    Modal
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    Navbar,
    Footer,
    Modal,
    CountdownTimer,  // 🔑 export it here
    CommonModule,       // so feature modules get common directives too
    FormsModule
  ]
})
export class SharedModule { }
