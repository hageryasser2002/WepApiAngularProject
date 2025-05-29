import { Component } from '@angular/core';
import { HeaderComponent } from "./Components/Header/header.component";
import { HomeComponent } from "./Pages/Home/home.component";
import { SpaceComponent } from "./Pages/Space/space.component";
import { AminitiesComponent } from "./Pages/Aminities/aminities.component";
import { MemberShipComponent } from "./Pages/member-ship/member-ship.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, SpaceComponent, AminitiesComponent, MemberShipComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WorkSpace';
}
