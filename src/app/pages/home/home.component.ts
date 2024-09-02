import { Component } from "@angular/core";
import { TitlebarComponent } from "../../components/titlebar/titlebar.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [TitlebarComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {}
