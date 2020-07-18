import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMeComponent } from './photo-me.component';

describe('PhotoMeComponent', () => {
  let component: PhotoMeComponent;
  let fixture: ComponentFixture<PhotoMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
