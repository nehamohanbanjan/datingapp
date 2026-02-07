import { Injectable } from '@angular/core';
import { ConfirmDialogue } from '../../shared/confirm-dialogue/confirm-dialogue';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogueService {
  private dialogComponent?: ConfirmDialogue;

  register(component: ConfirmDialogue) {
    this.dialogComponent = component;
  }

  confirm(message = 'Are you sure?'): Promise<boolean> {
    if (!this.dialogComponent) {
      throw new Error('Confirm dialog component is not registered');
    }
    return this.dialogComponent.open(message);
  }
}
