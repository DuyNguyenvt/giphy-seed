import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteGiphiesComponent } from './favorite-giphies.component';

describe('FavoriteGiphiesComponent', () => {
  let component: FavoriteGiphiesComponent;
  let fixture: ComponentFixture<FavoriteGiphiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteGiphiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteGiphiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
