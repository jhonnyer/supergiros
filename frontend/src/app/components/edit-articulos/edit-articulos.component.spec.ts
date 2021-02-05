import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticulosComponent } from './edit-articulos.component';

describe('EditArticulosComponent', () => {
  let component: EditArticulosComponent;
  let fixture: ComponentFixture<EditArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
