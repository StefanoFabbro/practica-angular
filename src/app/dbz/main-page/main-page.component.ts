import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.inteface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

nuevo: Personaje = {
  nombre : "Stefano",
  poder : 1000000000
}

/* agregarNuevoPersonaje( argumento : Personaje ) {
  this.personajes.push(argumento)
}
 */
constructor () {

}

}
