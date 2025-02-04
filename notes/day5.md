### Sharing data between **child** and **parent** directives and components


No Angular, muitas vezes precisamos passar informações de um componente pai para um componente filho. Isso é útil para personalizar o comportamento do componente filho ou exibir dados dinâmicos.

Para isso, usamos o decorador @Input, que funciona como as props em outros frameworks. Ele permite que um componente receba valores de fora.

Como funciona?
No componente filho, criamos uma propriedade com @Input:

`````
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>O trabalho do usuário é {{ occupation }}</p>`
})
export class UserComponent {
  @Input() occupation = ''; // Recebe um valor do componente pai
}
````


No componente pai, passamos o valor como um atributo na tag do componente filho:

`````
<app-user occupation="Desenvolvedor Angular"></app-user>
````

Agora, quando o componente for renderizado, ele exibirá:
"O trabalho do usuário é Desenvolvedor Angular"

Passando mais de um valor
Podemos passar vários valores para o componente filho. Por exemplo, adicionando um name:

`````
@Input() name = '';
`````


E no template:

````
<p>O nome do usuário é {{ name }}</p>
````

No componente pai, basta passar o valor:

````
<app-user name="Simran" occupation="Desenvolvedor Angular"></app-user>
````

// O nome do usuário é Simran //
