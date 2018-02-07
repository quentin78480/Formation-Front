import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import {FormsModule} from '@angular/forms';
import {AppApiService} from './shared/service/app-api.service';
import { TaskFilterPipe } from './Pipes/task-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddTasksComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
