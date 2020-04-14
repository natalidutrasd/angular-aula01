import { Task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  task: any;

  constructor(private http: HttpClient) { }

  getAll() {
   /* const list = window.localStorage.getItem('lista-tarefas');
    if (list) {
      this.tasks = JSON.parse(list);
    }
    return this.tasks;*/
    return this.http.get<Task[]>('');
  }

  getById(id: string) {
    // tslint:disable-next-line: triple-equals
    const task = this.tasks.find((value) => value._id == id);
    return this.task;
  }
  save(task: Task) {
   /* if (task._id) {
      const taskArr = this.getById(task._id);
      taskArr.description = task.description;
      taskArr.completed = task.completed;
    } else {
      let lastId = 0;
      if (this.tasks.length > 0) {
        lastId = this.tasks[this.tasks.length - 1]._id;
      }
      task._id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }

    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.tasks));*/
  }
  delete(id: string) {
    // tslint:disable-next-line: triple-equals
    const taskIndex = this.tasks.findIndex((value) => value._id == id);
    this.tasks.splice(taskIndex, 1);
    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.tasks));
  }
}
