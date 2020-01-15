import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStepperPageComponent } from './movie-stepper-page.component';

describe('MovieStepperPageComponent', () => {
  let component: MovieStepperPageComponent;
  let fixture: ComponentFixture<MovieStepperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStepperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStepperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
