import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagedataService {
  constructor() {}
  formOneSub: BehaviorSubject<any> = new BehaviorSubject(null);
  formTowSub: BehaviorSubject<any> = new BehaviorSubject(null);
  formFinalSub: BehaviorSubject<any> = new BehaviorSubject(null);
}
