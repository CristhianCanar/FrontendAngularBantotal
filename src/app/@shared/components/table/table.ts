import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  standalone: true,
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];
}
