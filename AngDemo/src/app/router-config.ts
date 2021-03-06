import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {FaqComponent} from './faq/faq.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent}
];

