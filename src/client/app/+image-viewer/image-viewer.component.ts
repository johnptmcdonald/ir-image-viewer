import {Component, Input, AfterViewInit} from "@angular/core";
import { IImage } from './image'

declare var Swiper: any;

@Component({
  moduleId: module.id,
  selector: 'ir-image-viewer',
  templateUrl: 'image-viewer.component.html',
  styleUrls: ['image-viewer.component.css'],

})

export class ImageViewerComponent implements AfterViewInit {
    Swiper: any;
    @Input() images: IImage[];

    constructor() {}

    ngAfterViewInit(){
      var galleryTop = new Swiper('.gallery-top', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10,
      });

      var galleryThumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
      });

      galleryTop.params.control = galleryThumbs;
      galleryThumbs.params.control = galleryTop;

    }

}
