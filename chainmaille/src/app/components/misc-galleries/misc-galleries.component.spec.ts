import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscGalleriesComponent } from './misc-galleries.component';

describe('MiscGalleriesComponent', () => {
  let component: MiscGalleriesComponent;
  let fixture: ComponentFixture<MiscGalleriesComponent>;

  beforeEach(async(() => {
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
