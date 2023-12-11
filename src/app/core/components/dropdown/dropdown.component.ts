import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() innerClass!: string;
  @Input() showOptions!: boolean;

  constructor() {}

  ngOnInit(): void {}

  onBlur() {
    setTimeout(() => {
      this.showOptions = false;
    }, 50);
  }
}
