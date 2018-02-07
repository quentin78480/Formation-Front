import { Injectable } from '@angular/core';

@Injectable()
export class AppApiService {

  constructor() { }

  getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks != null) {
      return tasks;
    } else {
      return [];
    }
  }

  save(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
