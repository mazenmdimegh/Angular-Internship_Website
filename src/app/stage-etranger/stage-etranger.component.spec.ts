import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEtrangerComponent } from './stage-etranger.component';

describe('StageEtrangerComponent', () => {
  let component: StageEtrangerComponent;
  let fixture: ComponentFixture<StageEtrangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageEtrangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageEtrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
