import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-navbar',
  standalone :true,
  imports: [MatButtonModule,
    RouterLink,
    MatToolbarModule,
    MatCardModule
    
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
