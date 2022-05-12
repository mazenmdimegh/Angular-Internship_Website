import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEteComponent } from './stage-ete.component';

describe('StageEteComponent', () => {
  let component: StageEteComponent;
  let fixture: ComponentFixture<StageEteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageEteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageEteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
