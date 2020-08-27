import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenucoatComponent } from './menucoat.component';



describe('MenucoatComponent', () => {
  let component: MenucoatComponent;
  let fixture: ComponentFixture<MenucoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenucoatComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
