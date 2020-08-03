import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemDressComponent } from './menuitem-dress.component';

describe('MenuitemDressComponent', () => {
  let component: MenuitemDressComponent;
  let fixture: ComponentFixture<MenuitemDressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemDressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
