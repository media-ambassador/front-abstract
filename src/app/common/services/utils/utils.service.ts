import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import * as moment from 'moment';
import { MaApiOrderStatus } from '../../modules/api-module/api-order';

@Injectable()
export class MaUtilsService {

  constructor(private router: Router) { }

  markFormGroupTouched(formGroup: FormGroup) {
    if (!formGroup || !formGroup.controls) {
      return;
    }

    (<any>Object).values(formGroup.controls).forEach((control: FormGroup) => {
      control.markAsTouched();

      if (!!control.controls) {
        (<any>Object).values(control.controls).forEach((c: FormGroup) => this.markFormGroupTouched(c));
      }
    });
  }

  setFormGroupEditable(formGroup: FormGroup, isEditable: boolean) {
    if (!formGroup || !formGroup.controls) {
      return;
    }

    (<any>Object).values(formGroup.controls).forEach((control: FormGroup) => {
      isEditable ? control.enable() : control.disable();

      if (!!control.controls) {
        (<any>Object).values(control.controls).forEach((c: FormGroup) => this.markFormGroupTouched(c));
      }
    });
  }

  getDateFromTimeStamp(timeStamp: number, format = 'DD-MM-YYYY HH:mm:ss'): string {
    return moment.unix(timeStamp).format(format);
  }

  returnColorClass(status: MaApiOrderStatus): string {
    if (!status) {
      return null;
    }

    const code = status.code;
    if (this.startsWith('pending', code)) {
      return 'blue';
    } else if (this.startsWith('cancelled', code)) {
      return 'red';
    } else if (this.startsWith('sent', code)) {
      return 'green';
    }

    return null;
  }

  startsWith(start: string, code: string) {
    return code.indexOf(start) !== -1;
  }

  moveToUrl(url: string) {
    url.indexOf('://') >= 0
      ? window.location.href = url
      : this.router.navigate([url]);
  }
}
