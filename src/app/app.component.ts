import { Component ,AfterViewInit} from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'poroject';
}
