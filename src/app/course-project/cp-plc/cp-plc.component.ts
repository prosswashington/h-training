import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface UDT {
  name: string;
  datatype: string;
  description: string;
}

const TAGS: UDT[] = [
  {
    name: 'TP04_TK509_RUN01',
    datatype: 'BOOL',
    description: '04-TK-509 LDPE Tank Mixer Motor Contactor Coil',
  },
  {
    name: 'TP04_TK509_MDS01',
    datatype: 'BOOL',
    description: '04-TK-509 LDPE Tank Mixer Motor Main Disc Sw'
  },
  {
    name: 'TP04_TK509_FLT01',
    datatype: 'BOOL',
    description: '04-TK-509 LDPE Tank Mixer Motor Fault'
  },
  {
    name: 'TP04_TK509_AUX01',
    datatype: 'BOOL',
    description: '04-TK-509 LDPE Tank Mixer Motor Aux'
  },
  {
    name: 'TP04_TK509_WS01_MS',
    datatype: 'udtModuleStatus',
    description: '04-TK-509 LDPE Tank Weight Scale Module'
  },
  {
    name: 'TP04_TK509_WS01',
    datatype: 'udtMettlerToledoWS',
    description: '04-TK-509 LDPE Tank Weight Scale'
  },
  {
    name: 'TP04_TK509_MT01',
    datatype: 'udtMotor',
    description: '04-TK-509 LDPE Tank Mixer Motor'
  },
  {
    name: 'TP04_TK509',
    datatype: 'udtTank',
    description: '04-TK-509 LDPE Tank'
  },
  {
    name: 'TP04_TK506_RUN01',
    datatype: 'BOOL',
    description: '04-TK-506 Batch Tank Mixer Motor Contactor Coil'
  },
  {
    name: 'TP04_TK506_MDS01',
    datatype: 'BOOL',
    description: '04-TK-506 Batch Tank Mixer Motor Main Disc Sw'
  },
  {
    name: 'TP04_TK506_FLT01',
    datatype: 'BOOL',
    description: '04-TK-506 Batch Tank Mixer Motor Fault'
  },
  {
    name: 'TP04_TK506_AUX01',
    datatype: 'BOOL',
    description: '04-TK-506 Batch Tank Mixer Motor Aux'
  },
  {
    name: 'TP04_TK506_LSH01',
    datatype: 'BOOL',
    description: 'Batch Tank Level Switch High'
  },
  {
    name: 'TP04_TK506_WS01_MS',
    datatype: 'udtModuleStatus',
    description: '04-TK-506 Batch Tank Weight Scale'
  },
  {
    name: 'TP04_TK506_WS01',
    datatype: 'udtMettlerToledoWS',
    description: '04-TK-506 Batch Tank Weight Scale'
  },
  {
    name: 'TP04_TK506_MT01',
    datatype: 'udtMotor',
    description: '04-TK-506 Batch Tank Mixer Motor'
  },
  {
    name: 'TP04_TK506',
    datatype: 'udtTank',
    description: '04-TK-506 Batch Tank'
  },
  {
    name: 'TP04_PU510_RUN01',
    datatype: 'BOOL',
    description: '04-PU-510 LDPE Pump Contactor Coil'
  },
  {
    name: 'TP04_PU510_MDS01',
    datatype: 'BOOL',
    description: '04-PU-510 LDPE Pump Main Disc Sw'
  },
  {
    name: 'TP04_PU510_FLT01',
    datatype: 'BOOL',
    description: '04-PU-510 LDPE Pump Fault'
  },
  {
    name: 'TP04_PU510_AUX01',
    datatype: 'BOOL',
    description: '04-PU-510 LDPE Pump AUX'
  },
  {
    name: 'TP04_PU510_MT01',
    datatype: 'udtMotor',
    description: '04-PU-510 LDPE Pump'
  },
  {
    name: 'TP04_AV556_SVO01',
    datatype: 'BOOL',
    description: '04-AV-556 LDPE Recirc Valve Open Output'
  },
  {
    name: 'TP04_AV556_ZSO01',
    datatype: 'BOOL',
    description: '04-AV-556 LDPE Recirc Valve Open Limit Sw Indication'
  },
  {
    name: 'TP04_AV556_ZSC01',
    datatype: 'BOOL',
    description: '04-AV-556 LDPE Recirc Valve Closed Limit Sw Indication'
  },
  {
    name: 'TP04_AV556',
    datatype: 'udtSSValve',
    description: '04-AV-556 LDPE Recirc Valve'
  },
  {
    name: 'TP04_BV551_SVO01',
    datatype: 'BOOL',
    description: '04-BV-551 LDPE Tank Discharge Valve Open Output'
  },
  {
    name: 'TP04_BV551_ZSO01',
    datatype: 'BOOL',
    description: '04-BV-551 LDPE Tank Discharge Valve Open Limit Sw Indication'
  },
  {
    name: 'TP04_BV551_ZSC01',
    datatype: 'BOOL',
    description: '04-BV-551 LDPE Tank Discharge Valve Closed Limit Sw Indication'
  },
  {
    name: 'TP04_BV551',
    datatype: 'udtSSValve',
    description: '04-BV-551 LDPE Tank Discharge Valve'
  },
  {
    name: 'NotUsedWS',
    datatype: 'udtMettlerToledoWS',
    description: 'Not Used Weigh Scale'
  },
  {
    name: 'NotUsed',
    datatype: 'udtNotUsed',
    description: 'Not Used'
  }
];



const MEMBERS: UDT[] = [
  {
    name: 'Mixer1AutoStartReq',
    datatype: 'BOOL',
    description: 'Mixer 1 Motor Auto Start Request',
  },
  {
    name: 'Mixer2AutoStartReq',
    datatype: 'BOOL',
    description: 'Mixer 2 Motor Auto Start Request',
  },
  {
    name: 'InfeedOnlineCmd',
    datatype: 'BOOL',
    description: 'Intake Online Command',
  },
  {
    name: 'InfeedOfflineCmd',
    datatype: 'BOOL',
    description: 'Intake Offline Command',
  },
  {
    name: 'InfeedOnline',
    datatype: 'BOOL',
    description: 'Infeed Online Indication',
  },
  {
    name: 'DischargeOnline',
    datatype: 'BOOL',
    description: 'Discharge Online  Indication',
  },
  {
    name: 'DischargeOnlineCmd',
    datatype: 'BOOL',
    description: 'Discharge Online Command',
  },
  {
    name: 'DischargeOfflineCmd',
    datatype: 'BOOL',
    description: 'Discharge Offline Command',
  },
  {
    name: 'SummaryAlm',
    datatype: 'BOOL',
    description: 'Summary Warning Alarm Indication',
  },
  {
    name: 'SummaryWarn',
    datatype: 'BOOL',
    description: 'Summary Warning Alarm Indication',
  },
  {
    name: 'Interlock',
    datatype: 'BOOL',
    description: 'Tank Interlock',
  },
  {
    name: 'Ready',
    datatype: 'BOOL',
    description: 'Ready Indication',
  },
  {
    name: 'SystemRunning',
    datatype: 'BOOL',
    description: 'System Running Indication',
  },
  {
    name: 'Estop',
    datatype: 'BOOL',
    description: 'Tank Estop',
  },
  {
    name: 'QualityHoldOnCmd',
    datatype: 'BOOL',
    description: 'Quality Hold On Command',
  },
  {
    name: 'QualityHoldOffCmd',
    datatype: 'BOOL',
    description: 'Quality Hold Off Command',
  },
  {
    name: 'QualityHold',
    datatype: 'BOOL',
    description: 'Quality Hold Indication',
  },
  {
    name: 'L1BatchNum',
    datatype: 'INT',
    description: 'L1 Batch Number',
  },
  {
    name: 'L2BatchNum',
    datatype: 'INT',
    description: 'L2 Batch Number',
  },
  {
    name: 'L3BatchNum',
    datatype: 'INT',
    description: 'L3 Batch Number',
  },
  {
    name: 'DevPresentCfg',
    datatype: 'INT',
    description: 'Device Present Configuration Word',
  },
  {
    name: 'Status',
    datatype: 'DINT',
    description: 'HMI Status Word',
  },
  {
    name: 'TrimSP',
    datatype: 'REAL',
    description: 'Trim Setpoint',
  },
  {
    name: 'PreactSP',
    datatype: 'REAL',
    description: 'PreAct Setpoint',
  },
  {
    name: 'FillLevel',
    datatype: 'REAL',
    description: 'Fill level in Tank (%)',
  },
  {
    name: 'Volume',
    datatype: 'REAL',
    description: 'Tank Volume',
  },
  {
    name: 'Weight',
    datatype: 'REAL',
    description: 'Tank Weight',
  },
  {
    name: 'EmptySP',
    datatype: 'REAL',
    description: 'Tank Empty Set Point',
  },
  {
    name: 'LowTempSP',
    datatype: 'REAL',
    description: 'Tank Low Temperature Control Set Point',
  },
  {
    name: 'HighTempSP',
    datatype: 'REAL',
    description: 'Tank High Temperature Control Set Point',
  },
  {
    name: 'LSHAlm',
    datatype: 'aoiAlarm',
    description: 'Level Switch High Alarm',
  },
  {
    name: 'LSHHAlm',
    datatype: 'aoiAlarm',
    description: 'Level Switch High High Alarm',
  },
  {
    name: 'LSLAlm',
    datatype: 'aoiAlarm',
    description: 'Level Switch Low Alarm',
  },
  {
    name: 'LSLLAlm',
    datatype: 'aoiAlarm',
    description: 'Level Switch Low Low Alarm',
  },
  {
    name: 'PSHAlm',
    datatype: 'aoiAlarm',
    description: 'Pressure Switch High Alarm',
  },
  {
    name: 'PSLAlm',
    datatype: 'aoiAlarm',
    description: 'Pressure Switch Low Alarm',
  },
  {
    name: 'EquipID',
    datatype: 'STRING10',
    description: 'Equipment ID',
  },
  {
    name: '',
    datatype: 'STRING10',
    description: 'Ingredient Code'
  }
];


@Component({
  selector: 'app-cp-plc',
  templateUrl: './cp-plc.component.html',
  styleUrls: ['./cp-plc.component.css']
})
export class CPPlcComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fgFive: FormGroup;
  fgSix: FormGroup;
  fgSeven: FormGroup;
  fgEight: FormGroup;
  fgNine: FormGroup;
  members = MEMBERS;
  tags = TAGS;

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
    this.fgEight = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fgNine = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}