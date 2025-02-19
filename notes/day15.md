Trying to create a communication between father - child 


Input 


TaskComponent -- Input
I've created @Input with values with values ​​within a list

```
 @Input({required: true}) TaskList?: Task[];
```

  

App.component --- filho 
```
 list: Task[] = []

  <app-tasks [userId]="selectedUser.id" [name]="selectedUser.name" [TaskList]="getListItem" ></app-tasks>


```
