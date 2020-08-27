import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenujacketComponent } from './menujacket.component';

describe('MenujacketComponent', () => {
  let component: MenujacketComponent;
  let fixture: ComponentFixture<MenujacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenujacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenujacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
