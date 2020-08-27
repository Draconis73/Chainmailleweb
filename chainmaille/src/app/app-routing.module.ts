import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './components/greeting/greeting.component';
import { HistoryComponent } from './components/history/history.component';
import { CreditsComponent } from './components/credits/credits.component';
import { LinksComponent } from './components/links/links.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { TypesComponent } from './components/types/types.component';
import { ArmorGalleriesComponent } from './components/armor-galleries/armor-galleries.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { JewelryGalleriesComponent } from './components/jewelry-galleries/jewelry-galleries.component';
import { MiscGalleriesComponent } from './components/misc-galleries/misc-galleries.component';
import { ErrorsComponent } from './components/errors/errors.component';

const routes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'welcome', component: GreetingComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'type', component: TypesComponent },
  { path: 'armor-galleries', component: ArmorGalleriesComponent },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'jewelry-galleries', component: JewelryGalleriesComponent },
  { path: 'misc-galleries', component: MiscGalleriesComponent },
  { path: '**', component: ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
