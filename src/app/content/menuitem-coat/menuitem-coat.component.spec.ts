import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemCoatComponent } from './menuitem-coat.component';

describe('MenuitemCoatComponent', () => {
  let component: MenuitemCoatComponent;
  let fixture: ComponentFixture<MenuitemCoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemCoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemCoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
