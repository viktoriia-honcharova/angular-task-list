import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskstable',
  templateUrl: './taskstable.component.html',
  styleUrls: ['./taskstable.component.css'],
})
export class TaskstableComponent {
  @Input() tasks!: Array<{ title: string; status: boolean }>;

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
