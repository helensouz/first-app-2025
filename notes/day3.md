## Inputs()

Inputs are one-way data flow (parent to child).
@Input() to declare input properties in the child component.
Inputs can be simple values, objects, or even arrays.

Inputs are properties of a **child** component that receive data from a **parent component**.
They are declared with the @Input() decorator in the child component.
They allow the parent component to pass values to the child component via property binding.


```
@Input() avatar: string = ''; // This property will receive data from the parent
```

app.component.html
```
 <app-user [avatar]="users[2].avatar" [name]="users[2].name"/>
```
