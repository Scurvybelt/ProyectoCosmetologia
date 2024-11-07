import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    agendarCita(): void {
        const nombre = this.removeAccents((document.getElementById('nombre') as HTMLInputElement).value);
        const correo = (document.getElementById('correo') as HTMLInputElement).value;
        const celular = (document.getElementById('celular') as HTMLInputElement).value;
        const fecha = (document.getElementById('fecha') as HTMLInputElement).value;
        const mensaje = this.removeAccents((document.getElementById('mensaje') as HTMLTextAreaElement).value);

        if (!nombre) {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        if (!correo) {
            alert('Por favor, ingrese su correo.');
            return;
        }

        if (!correo.includes('@')) {
            alert('Por favor, ingrese un correo válido.');
            return;
        }

        if (!celular) {
            alert('Por favor, ingrese su celular.');
            return;
        }

        if (!/^\d{1,10}$/.test(celular)) {
            alert('Por favor, ingrese un número de celular válido (solo números y no más de 10 caracteres).');
            return;
        }

        if (!mensaje) {
            alert('Por favor, ingrese su mensaje.');
            return;
        }

        if (mensaje.length > 100) {
            alert('El mensaje no debe exceder los 100 caracteres.');
            return;
        }

        const url = `https://api.whatsapp.com/send/?phone=2299012681&text=Hola!👋🏼+Quiero%20agendar%20una%20cita⏰%0ANombre: ${nombre}%0ACorreo: ${correo}%0ACelular: ${celular}%0AFecha: ${fecha}%0AMensaje: ${mensaje}`;
        
        window.location.href = url;
    }

    removeAccents(str: string): string {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}