import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatNotificationComponent } from './candidat-notification.component';

describe('CandidatNotificationComponent', () => {
  let component: CandidatNotificationComponent;
  let fixture: ComponentFixture<CandidatNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
