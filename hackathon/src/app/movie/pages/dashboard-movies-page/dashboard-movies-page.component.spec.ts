import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMoviesPageComponent } from './dashboard-movies-page.component';

describe('DashboardMoviesPageComponent', () => {
  let component: DashboardMoviesPageComponent;
  let fixture: ComponentFixture<DashboardMoviesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMoviesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
