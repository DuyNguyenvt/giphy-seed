import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackDoneComponent } from './snack-done.component';

describe('SnackDoneComponent', () => {
  let component: SnackDoneComponent;
  let fixture: ComponentFixture<SnackDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
