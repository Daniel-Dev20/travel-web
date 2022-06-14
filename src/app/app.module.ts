import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

//NG ZORRO
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';

//TRANSLATE
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DetallePaqueteComponent } from './detalle-paquete/detalle-paquete.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PaquetesComponent,
    PublicidadComponent,
    NosotrosComponent,
    DetallePaqueteComponent,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    HttpClientModule,
    NzIconModule,
    NzListModule,
    NzCardModule,
    FormsModule,
    NzSelectModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
    
  ],
  exports:[
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}