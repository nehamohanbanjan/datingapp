import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ConfirmDialogueService } from '../../core/services/confirm-dialogue-service';

@Component({
  selector: 'app-confirm-dialogue',
  imports: [],
  templateUrl: './confirm-dialogue.html',
  styleUrl: './confirm-dialogue.css',
})
export class ConfirmDialogue {
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;
  message = 'Are you sure?';
  private resolver: ((result: boolean) => void) | null = null;

  constructor() {
    inject(ConfirmDialogueService).register(this);
  }

  open(message: string): Promise<boolean> {
    this.message = message;
    this.dialogRef.nativeElement.showModal();
    return new Promise((resolve) => (this.resolver = resolve));
  }

  confirm() {
    this.dialogRef.nativeElement.close();
    this.resolver?.(true);
    this.resolver = null;
  }

  cancel() {
    this.dialogRef.nativeElement.close();
    this.resolver?.(false);
    this.resolver = null;
  }
}
