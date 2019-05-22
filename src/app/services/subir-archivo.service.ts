import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SubirArchivoService {
	constructor() {}

	subirArchivo(archivo: File, nombre: string) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();
			const xhr = new XMLHttpRequest();

			formData.append('imagen', archivo, archivo.name);

			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Imagen subida correctamente');
						resolve(xhr.response);
					} else {
						console.log('Fallo la subida');
						reject(xhr.response);
					}
				}
			};
			// revisar la URL
			const url = 'localhost:3000/albums/';

			xhr.open('POST', url, true);
			xhr.send(formData);
		});
	}

	cambiarImagen(imagenes: File, nombre: string) {
		this.subirArchivo(imagenes, nombre)
			.then((resp) => {
				console.log(resp);
			})
			.catch((resp) => {
				console.log('Error:', resp);
			});
	}
}
