import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any= [];
  displayedColumns: string[] = ['title', 'actions'];
  filter: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks(this.filter).subscribe(tasks => this.tasks = tasks);
  }

  editTask(id: string) {
    this.router.navigate(['/tasks/edit', id]);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  createTask() {
    this.router.navigate(['/tasks/create']);
  }
}
