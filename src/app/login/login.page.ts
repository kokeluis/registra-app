import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
  
    if (this.email === 'correo@ejemplo.com' && this.password === 'contraseña') {
      this.navCtrl.navigateRoot('/home');
    } else {
      this.navCtrl.navigateRoot('/tabs');
      // console.log('Autenticación fallida. Verifica tus credenciales.');
    }
  }
}





















  // Aquí debes implementar la lógica de autenticación.
    // Puedes utilizar los valores de 'email' y 'password' ingresados por el usuario.

    // Por ejemplo, podrías realizar una comprobación simple para redirigir a otra página: