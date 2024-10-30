import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MongodbService } from '../services/mongodb.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private mongoService: MongodbService, private router: Router, private snackBar: MatSnackBar,private userService:UserService) { }

  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });

  onSubmit() {
    const email = this.form.controls.email.value;
    console.log(email);
    if (email) {
      this.mongoService.login(email).subscribe({
        next: (data: any) => {
          const status = data.status;
          if (status === 'APPROVED') {
            this.userService.setUser(data);
            this.snackBar.open('Login realizado com sucesso!', 'Fechar', {
              duration: 3000,
              panelClass: ['success-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            setInterval(() => {
              this.router.navigate(['/dashboard']);
            }, 500);
            
          } else {
            this.form.controls.email.setErrors({ emailNotFound: true });
            this.snackBar.open('E-mail não aprovado ou não encontrado.', 'Fechar', {
              duration: 3000,
              panelClass: ['error-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
          }
        },
        error: () => {
          this.snackBar.open('Erro ao verificar o e-mail. Tente novamente.', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      });
    } else {
      this.form.controls.email.setErrors({ emailNotFound: true });
    }
  }
}
