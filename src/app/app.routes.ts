import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "connection",
	},
	{
		path: "connection",
		loadComponent: () =>
			import("./pages/connection/connection.component").then(
				(m) => m.ConnectionComponent,
			),
	},
];
