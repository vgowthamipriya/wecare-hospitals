import { Routes } from '@angular/router';
import { CoachLoginComponentComponent } from './coach-login-component/coach-login-component.component';
import { CoachSignupComponentComponent } from './coach-signup-component/coach-signup-component.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
import { UserSignupComponentComponent } from './user-signup-component/user-signup-component.component';

export const routes: Routes = [
    { path: 'coach-signup', component: CoachSignupComponentComponent },
    { path: 'coach-login', component: CoachLoginComponentComponent },
    { path: 'user-signup', component: UserSignupComponentComponent },
    { path: 'user-login', component: UserLoginComponentComponent }
];
