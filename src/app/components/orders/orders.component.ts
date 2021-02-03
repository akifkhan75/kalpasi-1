import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showOrderDetails() {
    this.dialog.open(OrderDetailsComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  showOrderFilters() {
    this.dialog.open(OrdersFilterComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'order-details-dialog',
  templateUrl: 'order-details-dialog.html'
})
export class OrderDetailsComponent {
  constructor() {}
}

@Component({
  selector: 'orders-filter',
  templateUrl: 'orders-filter.html'
})
export class OrdersFilterComponent {
  constructor() {}
}
