import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent {
  @Input()
  newTask: string = '';
  @Output() sendAddedItem = new EventEmitter<string>();
  addTask(newTask: string) {
    if (newTask) {
      this.sendAddedItem.emit(newTask);
      this.newTask = '';
    }
  }
}
