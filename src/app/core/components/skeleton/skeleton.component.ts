import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() rows = 5;
  @Input() columns = 6;

  getRowArray(): number[] {
    return new Array(this.rows);
  }

  getColumnArray(): number[] {
    return new Array(this.columns);
  }
}
