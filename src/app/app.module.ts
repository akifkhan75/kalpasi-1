import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MenuItemsComponent,
  DialogElementsExampleDialog,
  AddMenuDialog
} from './components/menu-items/menu-items.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { OrdersComponent } from './components/orders/orders.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent, CartOptions } from './components/menu/menu.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { OperationComponent } from './components/operation/operation.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    DialogElementsExampleDialog,
    AddMenuDialog,
    OrdersComponent,
    MenuComponent,
    CartOptions,
    DashboardComponent,
    AboutComponent,
    HomeComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatSelectModule
  ],
  exports: [MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
