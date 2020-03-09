import { Component } from '@angular/core';
import { Empdetails } from './empdetails';


@Component({
  selector: 'app-root',
  templateUrl: './employee.html',

})
export class AppComponent {
 title = 'employee';

  quali  = ['MCA','BTech','BCA'];

  exp=['1','2','>2'];

}
