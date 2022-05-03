import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurCompteComponent } from './entrepreneur-compte.component';

describe('EntrepreneurCompteComponent', () => {
  let component: EntrepreneurCompteComponent;
  let fixture: ComponentFixture<EntrepreneurCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
