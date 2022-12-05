import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { ActiveService } from '../../services/active.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  subscription!: Subscription;
  activeVendor!: Vendor;

  constructor(private blockService: ActiveService) {
    this.subscription = blockService.onBlock().subscribe((vendor) => this.activeVendor = vendor)
  }

  ngOnInit(): void {
  }

}