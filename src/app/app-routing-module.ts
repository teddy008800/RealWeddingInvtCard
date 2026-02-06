import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home-module').then(m => m.HomeModule) },
  { path: 'rsvp', loadChildren: () => import('./features/rsvp/rsvp-module').then(m => m.RsvpModule) },
  { path: 'duit-raya', loadChildren: () => import('./features/duit-raya/duit-raya-module').then(m => m.DuitRayaModule) },
  { path: 'calendar', loadChildren: () => import('./features/calendar/calendar-module').then(m => m.CalendarModule) },
  { path: 'location', loadChildren: () => import('./features/location/location-module').then(m => m.LocationModule) },
  { path: 'wishlist', loadChildren: () => import('./features/wishlist/wishlist-module').then(m => m.WishlistModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact-module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
