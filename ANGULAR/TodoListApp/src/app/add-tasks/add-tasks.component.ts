import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../shared/model/task';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  // Permet d'emettre un evenment lors de la creation d'une nouvelle tache
  @Output() newTaskEvent = new EventEmitter();

  task: Task = new Task();
  active: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  // fonction appelé lors de la creation d'une tache

  addTask() {
    // Lorsque l'utilisateur soumet sa tache, j'emet l'evenement avec la nouvelle tache.
    this.newTaskEvent.emit({task : this.task});
    this.task = new Task();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
