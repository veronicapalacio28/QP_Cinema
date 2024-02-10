import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'cinema', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: '**', redirectTo: 'auth' }
];