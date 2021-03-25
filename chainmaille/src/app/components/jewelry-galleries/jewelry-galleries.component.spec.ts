import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JewelryGalleriesComponent } from './jewelry-galleries.component';

describe('JewelryGalleriesComponent', () => {
  let component: JewelryGalleriesComponent;
  let fixture: ComponentFixture<JewelryGalleriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelryGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
