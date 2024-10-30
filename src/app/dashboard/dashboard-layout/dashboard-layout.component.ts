import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar.component";
import { SidenavComponent } from "../../shared/sidenav.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NavbarComponent, SidenavComponent,RouterModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
