import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../researchgroup-list/researchgroup-list.component'),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('../researchgroup-detail/researchgroup-detail.component'),
  },
] as Routes;
