import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupComponentComponent } from './user-signup-component.component';

describe('UserSignupComponentComponent', () => {
  let component: UserSignupComponentComponent;
  let fixture: ComponentFixture<UserSignupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSignupComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
