only code



## NgModel

With Angular we can "enhance" elements by adding so-called Directives form

<input ngModel> 
NgModel Directive 
An element enhancement that helps with extracting or changing user input values 

The ngModel directive in Angular is used to create two-way data binding between a TypeScript variable and an input element in the HTML template, such as <input>, <textarea>, or <select>. This allows the input field value to be automatically updated in the model and vice versa.

To use ngModel, you need to import the FormsModule in your Angular module:


import { FormsModule } from '@angular/forms';


<input [(ngModel)]="name" placeholder="Enter your name">
<p>Typed name: {{ name }}</p>

With this setup, any change in the input field will automatically update the name variable, and any change in the variable will reflect in the input field.

ngModel is useful for simple forms, but for more complex scenarios, Angular recommends using Reactive Forms.
