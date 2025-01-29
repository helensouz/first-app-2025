## Attribute Binding

```` 
 <img [src]="someSrc"> binds the src property of the underlying HTMLImageElement DOM object to the value stored in someSrc.
````

Whilst it might look like you're binding the src attribute of the <img> tag, you're actually NOT doing that. Instead, property binding really targets the underlying DOM object property (in this case a property that's also called src) and binds that.

This might look like a subtle detail (and often it indeed doesn't matter) but it's important to understand this difference between element attributes and property. 

Whilst it won't make a difference in Angular apps in many cases, it DOES matter if you're trying to set attributes on elements dynamically. Attributes which don't have an equally-named underlying property.

For example, when binding ARIA attributes, you can't target an underlying DOM object property.

Since "Property Binding" wants to target properties (and not attributes), that can be a problem. 

````
<div 
  role="progressbar" 
  [attr.aria-valuenow]="currentVal" 
  [attr.aria-valuemax]="maxVal">...</div>
By adding attr in front of the attribute name you want to bind dynamically, you're "telling" Angular that it shouldn't try to find a property with the specified name but instead bind the respective attribute - in the example above, the aria-valuenow and aria-valuemax attributes would be bound dynamically.
````


### Zone
Zone.js notifies Angular about user events, expired timers e etc, when this works, zone verifies the app searching new possible changes.
invisible grouped 

### Signals 
**signals is used to create and manage state**
Using signals to notify Angular about value changes & required UI updates -> required usage of special signal instructions & code.

*Signals are trackable data containers*
A signal is an object that stores a value (any type of value, including nested objects)
Angular manages subscriptions to the signal to get notified about value changes
*When a change occurs, Angular is then able to update the part of the UI that need updating. 

We're dealing with containers that contain the values and notifies the Angular ever those values changes.

````
<div>
  <button (click)="onSelectUser()">
    <img
    [src]="imagePath"
    [alt]="selectedUser().name"/>
    <span>{{ selectedUser().name }}</span>
  </button>
</div>
````
The () after the propertie like a *function*, to get the latest updated value currently store in the signal


**Example**

```
const count = signal(0);
// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
```
To change the value of a writable signal, either .set() it directly:

```
count.set(3);
```

#### Computed Signals
A computed signal is **read-only**; it does **not have a set or an update method**. Instead, the value of the computed signal automatically changes when any of the signals it reads *change*

```
import {signal, computed} from '@angular/core';
const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());
console.log(firstNameCapitalized()); // MORGAN
```
Use signal and computed inside your components to create and manage state

````
@Component({/* ... */})
export class UserProfile {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());
  activateTrial() {
    this.isTrial.set(true);
  }
}
````

links:
-https://www.alura.com.br/artigos/entendendo-signals-angular?srsltid=AfmBOopiGfDMxojNEbTztXbAY4pQ1OZzlZ5IbnAUnKomnmckbXQraNpU
-https://angular.dev/guide/signals
