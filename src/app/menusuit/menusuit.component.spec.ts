import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusuitComponent } from './menusuit.component';

describe('MenusuitComponent', () => {
  let component: MenusuitComponent;
  let fixture: ComponentFixture<MenusuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
