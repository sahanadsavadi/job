import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_ASYNC_VALIDATORS,
  Validators,
} from '@angular/forms';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { ManagedataService } from '../managedata.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss'],
})
export class NewJobComponent implements OnInit {
  selected = 'option2';
  activeMap = false;
  sendTitle: any;
  subOne: any;
  subTow: any;
  subFainall: any;
  addJob!: FormGroup;
  allvalue: any;
  dataLocation: any;
  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: '../../assets/image/marker-icon.png',
      shadowUrl: '../../assets/image/marker-shadow.png',
    }),
  };

  constructor(
    private _router: Router,
    private _manageDataService: ManagedataService
  ) {}
  ngOnInit(): void {
    this.addJob = new FormGroup({
      title: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
    if (history.state.data != undefined) {
      this._manageDataService.formOneSub.next(history.state.data.userInfo);
    }
    this.addJob.valueChanges.subscribe((x) => {
      this.allvalue = Object.assign(x, this.dataLocation);
      this._manageDataService.formTowSub.next(this.allvalue);
    });

    const map = L.map('map').setView([35.6892523, 51.3896004], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on('click', (e: any) => {
      this.dataLocation = {
        let: e.latlng.lat,
        lng: e.latlng.lng,
      };
      const marker = L.marker([e.latlng.lat, e.latlng.lng], this.icon).addTo(
        map
      );
      marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    });
  }

  onSubmit() {
    this._manageDataService.formTowSub.subscribe((data) => {
      this.sendTitle = data.title;
    });
    this._router.navigate(['Add'], {
      state: {
        data: {
          titleInfo: this.sendTitle,
        },
      },
    });
  }
}
