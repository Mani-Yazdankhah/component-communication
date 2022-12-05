import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { ActiveService } from '../../services/active.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  @Input() vendor!: Vendor;
  subscription!: Subscription;

  constructor(private blockService: ActiveService) { }

  ngOnInit(): void {
  }

  onBlock(vendor: Vendor) {
    this.blockService.blockVendor(vendor);
  }

}
