import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatItemDescriptionComponent } from './coat-item-description.component';

describe('CoatItemDescriptionComponent', () => {
  let component: CoatItemDescriptionComponent;
  let fixture: ComponentFixture<CoatItemDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatItemDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoatItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
