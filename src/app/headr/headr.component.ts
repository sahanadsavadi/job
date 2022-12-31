import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headr',
  templateUrl: './headr.component.html',
  styleUrls: ['./headr.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeadrComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
