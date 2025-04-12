import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponentComponent } from './user-login-component.component';

describe('UserLoginComponentComponent', () => {
  let component: UserLoginComponentComponent;
  let fixture: ComponentFixture<UserLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoginComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
