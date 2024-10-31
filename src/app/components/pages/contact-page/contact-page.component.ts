import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../common/services/email.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  formCorreo: FormGroup;

  constructor(private fb: FormBuilder,private serviceMail: EmailService) { 
    this.formCorreo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      tel: ['', [Validators.required]],
      asunto: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  mandarFomrulario(){
    console.log(this.formCorreo.value);
    this.serviceMail.sendEmail(this.formCorreo.value).subscribe((res) => {
      console.log(res);
    })
    
  }

}
