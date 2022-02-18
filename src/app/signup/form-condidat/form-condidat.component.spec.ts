import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCondidatComponent } from './form-condidat.component';

describe('FormCondidatComponent', () => {
  let component: FormCondidatComponent;
  let fixture: ComponentFixture<FormCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
