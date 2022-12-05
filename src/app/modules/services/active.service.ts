import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Vendor } from '../../vendor';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {
  private activeVendor!: Vendor;
  private subject = new Subject<any>();

  constructor() { }

  blockVendor(vendor: Vendor): void {
    this.activeVendor = vendor;
    this.subject.next(this.activeVendor);
  }

  onBlock(): Observable<any> {
    return this.subject.asObservable();
  }
}


