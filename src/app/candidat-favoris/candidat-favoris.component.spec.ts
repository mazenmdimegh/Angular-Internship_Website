import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatFavorisComponent } from './candidat-favoris.component';

describe('CandidatFavorisComponent', () => {
  let component: CandidatFavorisComponent;
  let fixture: ComponentFixture<CandidatFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatFavorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
