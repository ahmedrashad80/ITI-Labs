import { Component } from '@angular/core';
import data from '../../users.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = data;
  searchEmail = '';

  searchUser(searchEmail: string) {
    this.users = this.users.filter((user) =>
      user.email.toLowerCase().includes(this.searchEmail.toLowerCase())
    );
    if (this.searchEmail === '') {
      this.users = data;
    }

    return this.users;
  }
  resetSearch() {
    this.searchEmail = '';
    this.users = data;
  }
}
