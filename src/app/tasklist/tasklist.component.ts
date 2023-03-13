import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent {
  public tasks = [
    {
      title: 'HTML',
      status: false,
    },
  ];
  public task!: string;

  addTask(): void {
    this.tasks.push({
      title: this.task,
      status: false,
    });
    this.task = '';

    // console.log(this.tasks);
  }
}
