import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { raceWith } from 'rxjs';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  public editStatus = false;
  public login!: string;
  public password!: string;
  public email!: string;
  public currentIndex = 0;

  public users = [
    {
      login: 'Viktoriia',
      password: 'ghghghgh',
      email: 'vika@gmail.com',
    },
  ];

  public loginRegExp = /^[a-zA-Z]{4,16}$/;
  public emailRegExp = /^[\w-\.]+@[a-zA-Z.]+$/;
  public passwordRegExp = /^[\w-_\.]{4,16}$/;

  public loginCheck = false;
  public emailCheck = false;
  public passwordCheck = false;
  public check = false;

  checkInputs(): boolean {
    this.loginCheck = this.loginRegExp.test(this.login);
    this.emailCheck = this.emailRegExp.test(this.email);
    this.passwordCheck = this.passwordRegExp.test(this.password);
    this.check =
      this.loginCheck && this.emailCheck && this.passwordCheck ? true : false;

    if (!this.check) {
      alert('Неправильно заповнені поля!');
      console.log(false);
      return false;
    } else {
      console.log(true);
      return true;
    }
  }

  addUser(e: Event): void {
    e.preventDefault();

    if (this.checkInputs()) {
      let user = {
        login: this.login,
        password: this.password,
        email: this.email,
      };
      this.users.push(user);
      // render();
      // form.reset();
      console.log(this.users);
    }
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  editUser(index: number): void {
    this.currentIndex = index;
    this.login = this.users[index].login;
    this.password = this.users[index].password;
    this.email = this.users[index].email;
    this.editStatus = true;
  }

  saveEditUser(event: Event): void {
    event.preventDefault();
    if (this.checkInputs()) {
      let editedUser = {
        login: this.login,
        password: this.password,
        email: this.email,
      };
      this.users[this.currentIndex] = editedUser;
    }
    this.editStatus = false;
  }
}
