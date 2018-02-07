import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../shared/model/task';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {
    return null;
  }

}
