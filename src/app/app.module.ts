import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FileSelectDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { FotosComponent } from './pages/fotos/fotos.component';
import { HomeComponent } from './pages/home/home.component';
import { SubidaComponent } from './pages/subida/subida.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FotosComponent,
		NavbarComponent,
		FooterComponent,
		SubidaComponent,
		FileSelectDirective
	],
	imports: [ BrowserModule, APP_ROUTES ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
