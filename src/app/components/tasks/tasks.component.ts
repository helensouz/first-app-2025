import { Component, Input } from '@angular/core';
import { TaskComponent } from "../../task/task.component";
import { NewTaskComponent } from "../../tasks/new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) userId!: string
  @Input({required: true}) name?: string;
  isAddingTask = false

onStartAddTask() {
  this.isAddingTask = true
}


  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Build First prototype',
      summary: 'Build a first prototype of the online shop website ',
      dueDate: '2025-02-06',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2025-02-06',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Fixing the bug',
      summary: 'Fixing the bug in the code for the next daily',
      dueDate: '2025-02-06',
    }
  ]



  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.userId)
  }
  //checker if the userId is equal to the selected user id

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }


  onCancelAddTask (){
    this.isAddingTask = false
  }


}
