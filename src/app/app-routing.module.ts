import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuItemsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
