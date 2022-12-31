
import { ManagedataService } from './../managedata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  UploaderOptions,
  UploadFile,
  UploadInput,
  UploadOutput,
} from 'ngx-uploader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss'],
})
export class AddAppComponent implements OnInit {
  selected = 'option2';
  select = 'option1';
  getTitle: any;
  dataApp: any;
  uploadOptions: UploaderOptions;
  files: UploadFile[];
  addAppliocation!: FormGroup;
  subOne: any;
  subTow: any;
  subFainall: any;
  Data: any;
  uploadInput: EventEmitter<UploadInput>;
  constructor(
    private _router: Router,
    private _manageDataService: ManagedataService
  ) {
    this.uploadOptions = {
      concurrency: 10,
      allowedContentTypes: ['text/plain'],
      maxUploads: 10,
    };
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
  }

  ngOnInit(): void {
    this.addAppliocation = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      job: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      choosfile: new FormControl(null, Validators.required),
    });
    this.addAppliocation.valueChanges.subscribe((x) => {
      this.dataApp = x;
    });
    if (history.state.data != undefined) {
      this.getTitle = history.state.data.titleInfo;
      if (history.state.data.clearInfo) {
        this._manageDataService.formOneSub.next(null);
      } else {
        this._manageDataService.formOneSub.subscribe((x1) => {
          this.addAppliocation.patchValue(x1);
        });
      }
    }
  }
  onSubmit() {
    this._manageDataService.formOneSub.subscribe((x) => {
      this.subOne = x;
    });
    this._manageDataService.formTowSub.subscribe((x) => {
      this.subTow = x;
    });
    this._manageDataService.formOneSub.next(this.dataApp);
    this.subFainall = Object.assign(this.subOne, this.subTow);
    this._manageDataService.formFinalSub.next(this.subFainall);
    this._manageDataService.formFinalSub.subscribe((data) => {
      this.Data = data;
    });

    if (this.subTow == null) {
      this._router.navigate(['/'], {
        state: {
          data: {
            dataOne: this.subOne,
            careate: false,
          },
        },
      });
    } else {
      this._router.navigate(['/'], {
        state: {
          data: {
            dataFinall: this.Data,
            careate: false,
          },
        },
      });
    }
  }
  startUpload(output: UploadOutput): void {
    if (output.type == 'rejected') {
      this.addAppliocation.patchValue({ choosfile: output.file?.name });
      console.log(output );
    }
  
  }
  goToJob() {
    this._router.navigate(['/AddJOb'], {
      state: {
        data: {
          userInfo: this.dataApp,
        },
      },
    });
  }
}
