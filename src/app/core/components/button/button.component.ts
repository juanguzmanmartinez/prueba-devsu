import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() innerClass = '';
  @Input() appearance: 'primary' | 'secondary' | 'outline' | 'default' =
    'default';
  @Input() behavior: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  @Output() clicked = new EventEmitter();
}
