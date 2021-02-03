import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  item: string;
  menu: string;
  price: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    item: 'Egg and Cheez',
    menu: 'Breakfast',
    price: 700.0,
    actions: 'test'
  },
  {
    item: 'Egg and Toast',
    menu: 'Breakfast',
    price: 740.0,
    actions: 'test'
  },
  {
    item: 'Egg and Cheez',
    menu: 'Breakfast',
    price: 720.0,
    actions: 'test'
  },
  {
    item: 'Egg and Toast',
    menu: 'Breakfast',
    price: 740.0,
    actions: 'test'
  },
  {
    item: 'Egg and Cheez',
    menu: 'Breakfast',
    price: 710.0,
    actions: 'test'
  },
  {
    item: 'Egg and Toast',
    menu: 'Breakfast',
    price: 740.0,
    actions: 'test'
  },
  {
    item: 'Egg and Cheez',
    menu: 'Breakfast',
    price: 760.0,
    actions: 'test'
  },
  {
    item: 'Egg and Toast',
    menu: 'Breakfast',
    price: 740.0,
    actions: 'test'
  }
];
@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements AfterViewInit {
  displayedColumns: string[] = ['item', 'menu', 'price', 'actions'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, public menuDialog: MatDialog) {
    // // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

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
