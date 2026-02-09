import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Output() closeModal = new EventEmitter<void>();



  onCloseClick() {
    this.closeModal.emit();
  }
}
