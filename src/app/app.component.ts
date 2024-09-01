import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TitlebarComponent } from "./components/titlebar/titlebar.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, TitlebarComponent],
	templateUrl: "./app.component.html",
})
export class AppComponent {}
