import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSignupComponentComponent } from './coach-signup-component.component';

describe('CoachSignupComponentComponent', () => {
  let component: CoachSignupComponentComponent;
  let fixture: ComponentFixture<CoachSignupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachSignupComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachSignupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
