import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page {
  currentDateTime: string = ''; // Variable para almacenar la fecha y hora actual

  constructor(private toastController: ToastController) {
    // Llama al método para obtener la fecha y hora actual cuando se crea la página
    this.getCurrentDateTime();
  }

  // Método para obtener la fecha y hora actual
  getCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Formatear la fecha y hora como una cadena legible
  }

  // Función para registrar la asistencia
  async registrarAsistencia() {
    // Lógica para registrar la asistencia

    // Mostrar un mensaje de éxito
    const toast = await this.toastController.create({
      message: 'Se ha registrado su asistencia exitosamente',
      duration: 3000, // Duración en milisegundos del mensaje (3 segundos en este caso)
      position: 'bottom', // Posición del mensaje (bottom, top, middle, etc.)
      color: 'success' // Color del mensaje (success, warning, danger, etc.)
    });

    toast.present();
  }
}



































// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss']
// })
// export class Tab1Page {

//   constructor() {}

// }
