import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiscGalleriesComponent } from './misc-galleries.component';

describe('MiscGalleriesComponent', () => {
  let component: MiscGalleriesComponent;
  let fixture: ComponentFixture<MiscGalleriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
