import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { MaApiOrderStatus } from '../../modules/api-module/api-order';
import { MaStreetAddressData } from '.';

@Injectable()
export class MaUtilsService<OS extends MaApiOrderStatus, AD extends MaStreetAddressData> {

  constructor(protected router: Router) { }

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
    const date = new Date(timeStamp * 1000);

    return date.toLocaleDateString('pl-PL');
  }

  returnColorClass(status: OS): string {
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

  getFullStreetAddress(data: AD): string {
    if (!data) {
      return '';
    }

    const street = !!data.street ? data.street : '';
    const number = !!data.number ? data.number : '';
    const address = `${street} ${number}`;

    return !!data.apartment ? `${address}/${data.apartment}` : address;
  }

  checkFileExist(url: string): Observable<boolean> {
    const subject = new Subject<boolean>();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.addEventListener('progress', () => {
      subject.next(xhr.status === 200);
      subject.complete();
    });

    xhr.addEventListener('error', () => {
      subject.next(false);
      subject.complete();
    });

    xhr.send();

    return subject.asObservable();
  }

  isSupportActive(hourFrom: number, hourTo: number) {
    const date = new Date(),
          day = date.getDay(),
          hour = date.getHours();

    const isWeekend = day === 0 || day === 6 ? true : false;
    const isOpen = hour > hourFrom && hour < hourTo ? true : false;

    return  isOpen && !isWeekend ? true : false;
  }
}
