import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurOffreComponent } from './entrepreneur-offre.component';

describe('EntrepreneurOffreComponent', () => {
  let component: EntrepreneurOffreComponent;
  let fixture: ComponentFixture<EntrepreneurOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
