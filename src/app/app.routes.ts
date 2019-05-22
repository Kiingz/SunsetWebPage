import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './pages/fotos/fotos.component';
import { HomeComponent } from './pages/home/home.component';
import { SubidaComponent } from './pages/subida/subida.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'fotos', component: FotosComponent },
	{ path: 'subida', component: SubidaComponent },
	{ path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
