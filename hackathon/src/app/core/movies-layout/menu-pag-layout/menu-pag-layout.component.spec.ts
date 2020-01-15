import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPagLayoutComponent } from './menu-pag-layout.component';

describe('MenuPagLayoutComponent', () => {
  let component: MenuPagLayoutComponent;
  let fixture: ComponentFixture<MenuPagLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPagLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPagLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
