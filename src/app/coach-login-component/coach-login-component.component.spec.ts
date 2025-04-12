import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachLoginComponentComponent } from './coach-login-component.component';

describe('CoachLoginComponentComponent', () => {
  let component: CoachLoginComponentComponent;
  let fixture: ComponentFixture<CoachLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachLoginComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
