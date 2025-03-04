import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsComponent } from './items/items.component';
@Component({
  selector: 'app-to-do',
  imports: [
    FormsModule,
    CommonModule,
    AddItemComponent,
    AddItemComponent,
    ItemsComponent,
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask(newTask: string) {
    if (newTask) {
      this.tasks.push({ name: newTask, completed: false });
      this.newTask = '';
    }
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  markAsCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
