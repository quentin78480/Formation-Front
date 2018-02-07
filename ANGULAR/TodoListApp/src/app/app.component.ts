import {Component, OnInit} from '@angular/core';
import {AppApiService} from './shared/service/app-api.service';
import {Task} from './shared/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appApiService: AppApiService) {}
  tasks: Task[] = [];

  // Au chargement de l'application,
  ngOnInit(): void {
    this.tasks = this.appApiService.getTasks();
  }

  // Cette fonction se déclenche dans l'application lorsqu'une nouvelle tache est créée par l'utilisateur dans le composant add-tasks

  newTask(newTaskEvent) {
    this.tasks.push(newTaskEvent.task);
    this.appApiService.save(this.tasks);
  }
  taskIsDone(task: Task) {
    task.status = true;
    this.appApiService.save(this.tasks);
  }
}
