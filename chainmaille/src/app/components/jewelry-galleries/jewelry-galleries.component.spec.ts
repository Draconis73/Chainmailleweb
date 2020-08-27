import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryGalleriesComponent } from './jewelry-galleries.component';

describe('JewelryGalleriesComponent', () => {
  let component: JewelryGalleriesComponent;
  let fixture: ComponentFixture<JewelryGalleriesComponent>;

  beforeEach(async(() => {
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
