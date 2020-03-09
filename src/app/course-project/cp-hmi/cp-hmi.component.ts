import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cp-hmi',
  templateUrl: './cp-hmi.component.html',
  styleUrls: ['./cp-hmi.component.css']
})
export class CpHmiComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fgFive: FormGroup;
  fgSix: FormGroup;
  fgSeven: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fgFive = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fgSix = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fgSeven = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
