import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArmorGalleriesComponent } from './armor-galleries.component';

describe('ArmorGalleriesComponent', () => {
  let component: ArmorGalleriesComponent;
  let fixture: ComponentFixture<ArmorGalleriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
