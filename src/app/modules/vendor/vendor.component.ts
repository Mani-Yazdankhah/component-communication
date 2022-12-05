import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../vendor';
import { Vendors } from '../../mock-vendors';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  vendors: Vendor[] = Vendors;

  constructor() { }

  ngOnInit(): void {
  }

}
