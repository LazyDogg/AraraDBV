import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormComponent } from "../../components/connection/form/form.component";
import { ToastService } from "../../services/handlers/toast.service";

@Component({
	selector: "app-connection",
	standalone: true,
	imports: [CommonModule, RouterOutlet, FormComponent],
	templateUrl: "./connection.component.html",
	styleUrl: "./connection.component.scss",
})
export class ConnectionComponent implements OnInit, OnDestroy {
	@ViewChild(FormComponent) connectionFormComponent!: FormComponent;

	connectionFormData: any;
	connectionFormErrors: any;

	constructor(private toast: ToastService) {}

	ngOnInit(): void {
		this.resetForm();
	}

	ngOnDestroy(): void {
		this.resetForm();
	}

	async resetForm() {
		if (this.connectionFormComponent) {
			this.connectionFormComponent.resetForm();
		}
	}

	onFormSubmit(formData: any) {
		this.connectionFormData = formData;
	}

	onSubmit() {
		if (this.validateForm()) {
			console.log("Formulário válido", this.connectionFormData);
		}
	}

	onErrors(errors: any) {
		this.connectionFormErrors = {
			email: errors.email?.errors,
			password: errors.password?.errors,
		};
	}

	validateForm(): boolean {
		const validationMessages: { [key: string]: { [key: string]: string } } = {
			email: {
				required: "O campo email é obrigatório",
				minlength: "O campo email deve ter no mínimo 5 caractere",
				maxlength: "O campo email deve ter no máximo 100 caracteres",
				email: "O campo email deve ser um email válido",
			},
			password: {
				required: "O campo senha é obrigatório",
				minlength: "O campo senha deve ter no mínimo 7 caracteres",
				maxlength: "O campo senha deve ter no máximo 255 caracteres",
			},
		};

		for (const field in this.connectionFormErrors) {
			const errorType = this.connectionFormErrors[field];
			if (errorType) {
				for (const errorKey in errorType) {
					if (errorType[errorKey]) {
						this.toast.error({
							message: validationMessages[field][errorKey],
							title: "Erro",
						});
						return false;
					}
				}
			}
		}
		return true;
	}
}
