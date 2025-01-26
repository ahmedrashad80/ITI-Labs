import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  @Input() tasks: any;
  @Output()
  sendDeleteTask = new EventEmitter<number>();
  deleteTask(index: number) {
    this.sendDeleteTask.emit(index);
  }
  @Output() sendCompletedTask = new EventEmitter<number>();
  markAsCompleted(index: number) {
    this.sendCompletedTask.emit(index);
  }
}
