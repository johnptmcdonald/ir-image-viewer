import {Component, Input, AfterViewInit} from "@angular/core";
import { IImage } from './image'

declare var Swiper: any;
// import './swiper' => Error: TypeError: AMD module

@Component({
  moduleId: module.id,
  selector: 'ir-image-viewer',
  templateUrl: 'image-viewer.component.html',
  styleUrls: ['image-viewer.component.css'],

})

export class ImageViewerComponent implements AfterViewInit {
  galleryTop: any;
  galleryThumbs: any;

  @Input() images: IImage[];

  constructor() {}

  ngAfterViewInit(){
    // for infinite looping, the slides per view on the thumbnails
    // must be the same as the 'looped slides number' on the main gallery
    // Thus, slidesPerView is defined here:
    let slidesPerView = '5';

    this.galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: slidesPerView,
        touchRatio: 3,
        slideToClickedSlide: true,
        loop: true,
    });

    this.galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        loop: true,
        loopedSlides: +slidesPerView
    });


    this.galleryTop.params.control = this.galleryThumbs;
    this.galleryThumbs.params.control = this.galleryTop;

  }

  showIndices(){
    console.log(this.galleryTop.slides)
    console.log(this.galleryThumbs.slides)
    console.log("main gallery index: " + this.galleryTop.activeIndex)
    console.log("thumbnail gallery index: " + this.galleryThumbs.activeIndex)
  }

}
