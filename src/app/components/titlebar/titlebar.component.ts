import { Component } from "@angular/core";
import { appWindow } from "@tauri-apps/api/window";

@Component({
	selector: "app-titlebar",
	standalone: true,
	imports: [],
	templateUrl: "./titlebar.component.html",
	styleUrl: "./titlebar.component.scss",
})
export class TitlebarComponent {
	maximized = true;

	constructor() {
		appWindow.isMaximized().then((maximized) => {
			this.maximized = maximized;
		});
	}

	minimize(): void {
		appWindow.minimize();
	}

	maximize(): void {
		appWindow.toggleMaximize();
		this.maximized = !this.maximized;
	}

	close(): void {
		appWindow.close();
	}
}
