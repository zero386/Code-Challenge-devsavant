import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
// import { FeaturesModule } from './features/features.module';
// import { LoginComponent } from './login/login.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { HomeComponent } from './home/home.component';
// import { AuthenticationGuard } from './core/guards/authentication.guard';
// import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
/*   {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Products',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'Customers',
    loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'Categories',
    loadChildren: () => import('./features/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'Sales',
    loadChildren: () => import('./features/sales/sales.module').then(m => m.SalesModule)
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
