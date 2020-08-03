import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemShoesComponent } from './menuitem-shoes.component';

describe('MenuitemShoesComponent', () => {
  let component: MenuitemShoesComponent;
  let fixture: ComponentFixture<MenuitemShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
