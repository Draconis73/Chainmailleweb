import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { HistoryComponent } from './components/history/history.component';
import { TypesComponent } from './components/types/types.component';
import { CreditsComponent } from './components/credits/credits.component';
import { LinksComponent } from './components/links/links.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { ArmorGalleriesComponent } from './components/armor-galleries/armor-galleries.component';
import { JewelryGalleriesComponent } from './components/jewelry-galleries/jewelry-galleries.component';
import { MiscGalleriesComponent } from './components/misc-galleries/misc-galleries.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GreetingComponent,
    MaterialsComponent,
    HistoryComponent,
    TypesComponent,
    CreditsComponent,
    LinksComponent,
    GalleriesComponent,
    ArmorGalleriesComponent,
    JewelryGalleriesComponent,
    MiscGalleriesComponent,
    ErrorsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
