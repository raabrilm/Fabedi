import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselConfig } from './main-banner.component';

describe('MainBannerComponent', () => {
  let component: NgbdCarouselConfig;
  let fixture: ComponentFixture<NgbdCarouselConfig>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdCarouselConfig ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
