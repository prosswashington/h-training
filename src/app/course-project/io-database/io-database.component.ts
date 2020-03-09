import { Component, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Io {
  plcTag: string;
  desc: string;
  abAlias: string;
}

const IOs: Io[] = [
  {
    plcTag: 'TP04_TK509_RUN01',
    desc: '04-TK-509 LDPE Tank Mixer Motor Contactor Coil',
    abAlias: 'TP04_ALG01_CP212_R1S1_OA16.Ch0'
  },
  {
    plcTag: 'TP04_TK509_AUX01',
    desc: '04-TK-509 LDPE Tank Mixer Motor Aux',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch0'
  },
  {
    plcTag: 'TP04_TK509_FLT01',
    desc: '04-TK-509 LDPE Tank Mixer Motor Fault',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch1'
  },
  {
    plcTag: 'TP04_TK509_MDS01',
    desc: '04-TK-509 LDPE Tank Mixer Motor Main Disc Sw',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch2'
  },
  {
    plcTag: 'TP04_TK506_RUN01',
    desc: '04-TK-506 Batch Tank Mixer Motor Contactor Coil',
    abAlias: 'TP04_ALG01_CP212_R1S1_OA16.Ch1'
  },
  {
    plcTag: 'TP04_TK506_AUX01',
    desc: '04-TK-506 Batch Tank Mixer Motor Aux',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch3'
  },
  {
    plcTag: 'TP04_TK506_FLT01',
    desc: '04-TK-506 Batch Tank Mixer Motor Fault',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch4'
  },
  {
    plcTag: 'TP04_TK506_MDS01',
    desc: '04-TK-506 Batch Tank Mixer Motor Main Disc Sw',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch5'
  },
  {
    plcTag: 'TP04_TK506_LSH01',
    desc: '04-TK-506 Batch Tank Lvl Sw High',
    abAlias: 'TP04_ALG01_CP213_R0S0_IB32.Ch0'
  },
  {
    plcTag: 'TP04_BV551_SVO01',
    desc: '04-BV-551 LDPE Tank Discharge Valve Open Output',
    abAlias: 'TP04_ALG01_CP212_R0S1_OB16.Ch0'
  },
  {
    plcTag: 'TP04_BV551_ZSC01',
    desc: '04-BV-551 LDPE Tank Discharge Valve Closed Limit Sw Indication',
    abAlias: 'TP04_ALG01_CP213_R0S0_IB32.Ch1'
  },
  {
    plcTag: 'TP04_BV551_ZSO01',
    desc: '04-BV-551 LDPE Tank Discharge Valve Open Limit Sw Indication',
    abAlias: 'TP04_ALG01_CP213_R0S0_IB32.Ch2'
  },
  {
    plcTag: 'TP04_AV556_SVO01',
    desc: '04-AV-556 LDPE Recirc Valve Open Output',
    abAlias: 'TP04_ALG01_CP212_R0S1_OB16.Ch1'
  },
  {
    plcTag: 'TP04_AV556_ZSC01',
    desc: '04-AV-556 LDPE Recirc Valve Closed Limit Sw Indication',
    abAlias: 'TP04_ALG01_CP213_R0S0_IB32.Ch3'
  },
  {
    plcTag: 'TP04_AV556_ZSO01',
    desc: '04-AV-556 LDPE Recirc Valve Open Limit Sw Indication',
    abAlias: 'TP04_ALG01_CP213_R0S0_IB32.Ch4'
  },
  {
    plcTag: 'TP04_PU510_RUN01',
    desc: '04-PU-510 LDPE Pump Contactor Coil',
    abAlias: 'TP04_ALG01_CP212_R1S1_OA16.Ch2'
  },
  {
    plcTag: 'TP04_PU510_AUX01',
    desc: '04-PU-510 LDPE Pump AUX',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch6'
  },
  {
    plcTag: 'TP04_PU510_FLT01',
    desc: '04-PU-510 LDPE Pump Fault',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch7'
  },
  {
    plcTag: 'TP04_PU510_MDS01',
    desc: '04-PU-510 LDPE Pump Main Disc Sw',
    abAlias: 'TP04_ALG01_CP212_R1S0_IA16.Ch8'
  }
];

function search(text: string, pipe: PipeTransform): Io[] {
  return IOs.filter(io => {
    const term = text.toLowerCase();
    return io.plcTag.toLowerCase().includes(term)
        || pipe.transform(io.desc).includes(term)
        || pipe.transform(io.abAlias).includes(term);
  });
}

@Component({
  selector: 'app-io-database',
  templateUrl: './io-database.component.html',
  styleUrls: ['./io-database.component.css'],
  providers: [LowerCasePipe]
})

export class IoDatabaseComponent {
  IOs$: Observable<Io[]>;
  filter = new FormControl('');

  constructor(pipe: LowerCasePipe) {
    this.IOs$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }


}
