import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

// ir-image-viewer imports:
import { ImageViewerComponent } from './+image-viewer/image-viewer.component'
import { IImage } from './+image-viewer/image'


/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, ImageViewerComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  images: IImage[];


  constructor() {
    console.log('Environment config', Config);
  }

  ngOnInit(): void {
  	this.images = [
  		{
  			title: 'image1',
  			url: 'http://blog.caranddriver.com/wp-content/uploads/2016/06/2017-Ferrari-GTC4Lusso-102-876x535.jpg',
  			caption: 'Picture of ferrari'

  		},
  		{
  			title: 'image2',
  			url: 'http://blog.caranddriver.com/wp-content/uploads/2016/06/2016-Nissan-Leaf-101-876x535.jpg',
  			caption: 'Nissan Leaf is all-electric'
  		},
  		{
  			title: 'image1',
  			url: 'http://blog.caranddriver.com/wp-content/uploads/2016/06/2016-Nissan-Leaf-146-876x535.jpg',
  			caption: 'The back end of the Nissan Leaf'

  		},
  		{
  			title: 'image4',
  			url: 'http://blog.caranddriver.com/wp-content/uploads/2016/06/2016-Nissan-Leaf-137-876x535.jpg',
  			caption: 'The inside of a car'
  		},
  		{
  			title: 'image5',
  			url: 'http://image.usedcars.com/Imageserver/Chrome/original/13779.jpg',
  			caption: 'A red car'

  		},
  		{
  			title: 'image6',
  			url: 'http://blog.caranddriver.com/wp-content/uploads/2016/06/2016-Chevrolet-Malibu-hybrid-137-876x535.jpg',
  			caption: 'Drinks holders and a gear stick'
  		},

  	]
  }
}
