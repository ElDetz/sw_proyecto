import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products/features/product-shell/product.route'),
  },
  { path: 'cart', loadChildren: () => import('./cart/cart.routes') },
  {
    path: '**',
    redirectTo: '',
  },
  { path: 'researchgroup', loadChildren: () => import('./researchGroup/features/researchgroup-shell/researchgroup.route') },
  {
    path: '**',
    redirectTo: '',
  },
];
