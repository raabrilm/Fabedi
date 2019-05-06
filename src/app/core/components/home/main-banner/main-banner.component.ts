import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './main-banner.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {
  images = [
  `https://live.staticflickr.com/65535/40723745013_d619fa812b_o_d.jpg`,
  `https://live.staticflickr.com/65535/33811229778_84e7f62efd_o_d.jpg`,
  `https://live.staticflickr.com/65535/47688811541_c5e82f117d_o_d.jpg`,
  // `https://live.staticflickr.com/65535/47636046652_1a626ee0b5_o_d.jpg`,
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
  }
}