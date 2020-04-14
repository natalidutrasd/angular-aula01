import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title = 'Nova Tarefa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // tslint:disable-next-line: radix
      this.task = this.taskService.getById(id);
      this.title = 'Alterando Tarefa';
    }
  }
  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }
}
