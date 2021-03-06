import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload/';

@Component({
	selector: 'app-subida',
	templateUrl: './subida.component.html',
	styles: []
})
export class SubidaComponent implements OnInit {

	constructor() {}

	public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

	ngOnInit() {
		this.uploader.onAfterAddingFile = (file) => {
			file.withCredentials = false;
		};
		this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
			console.log('ImageUpload:uploaded:', item, status, response);
			alert('File uploaded successfully');
		};
	}
}
