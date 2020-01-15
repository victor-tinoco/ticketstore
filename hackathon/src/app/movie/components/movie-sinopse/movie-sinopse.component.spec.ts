import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSinopseComponent } from './movie-sinopse.component';

describe('MovieSinopseComponent', () => {
  let component: MovieSinopseComponent;
  let fixture: ComponentFixture<MovieSinopseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSinopseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSinopseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
