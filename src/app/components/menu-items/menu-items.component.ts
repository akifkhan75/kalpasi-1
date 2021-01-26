import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  constructor(public dialog: MatDialog, public menuDialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openMenuDialog() {
    this.menuDialog.open(AddMenuDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements.html'
})
export class DialogElementsExampleDialog {}

@Component({
  selector: 'add-menu-dialog',
  templateUrl: 'add-menu-dialog.html'
})
export class AddMenuDialog {}
