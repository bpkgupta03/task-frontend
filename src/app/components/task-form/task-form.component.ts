import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: any = { title: '', description: '', status: '' };
  isEdit: boolean = false;
  taskId: string | null = null;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.isEdit = true;
      this.taskService.getTaskById(this.taskId).subscribe(task => this.task = task);
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.taskService.updateTask(this.taskId!, this.task).subscribe(() => this.router.navigate(['/tasks']));
    } else {
      this.taskService.createTask(this.task).subscribe(() => this.router.navigate(['/tasks']));
    }
  }
}
