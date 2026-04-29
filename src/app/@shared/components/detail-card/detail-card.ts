import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  imports: [],
  standalone: true,
  templateUrl: './detail-card.html',
  styleUrl: './detail-card.css',
})

export class DetailCard {
  @Input() title: string = '';
  @Input() data: any;

  @Input() fields: {
    key: string;
    label: string;
    icon?: string;
  }[] = [];
}
