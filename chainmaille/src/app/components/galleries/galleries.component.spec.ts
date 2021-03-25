import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleriesComponent } from './galleries.component';

describe('GalleriesComponent', () => {
  let component: GalleriesComponent;
  let fixture: ComponentFixture<GalleriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
