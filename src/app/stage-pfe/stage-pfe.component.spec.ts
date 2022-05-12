import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePFEComponent } from './stage-pfe.component';

describe('StagePFEComponent', () => {
  let component: StagePFEComponent;
  let fixture: ComponentFixture<StagePFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagePFEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagePFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
