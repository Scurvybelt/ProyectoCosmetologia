import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../common/services/email.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  formCorreo: FormGroup;
  EnviarCorreo: boolean = false;

  constructor(private fb: FormBuilder,private serviceMail: EmailService,private notifier: NotifierService) { 
    this.notifier = notifier;
    this.formCorreo = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      asunto: ['', [Validators.required]]
    });
  }
  
  ngOnInit(): void {
    
  }
  public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}

  mandarFomrulario(){
    if(this.formCorreo.invalid){
      this.formCorreo.markAllAsTouched();
      return;
    }

    this.EnviarCorreo = true;
    // console.log(this.formCorreo.value);
    

    this.serviceMail.sendEmail(this.formCorreo.value).subscribe((res) => {
      // console.log(res);
      this.showNotification('success', 'Correo enviado correctamente');
      this.EnviarCorreo = false;
      
      // notiflix.Notify.Success('Correo enviado correctamente');
      
    },(error) => {
      this.showNotification('error', 'Error al enviar el correo');
      this.EnviarCorreo = false;
    })
  }

}
