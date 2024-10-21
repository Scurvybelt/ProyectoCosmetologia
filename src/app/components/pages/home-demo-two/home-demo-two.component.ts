import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../common/services/servicios.service';

@Component({
  selector: 'app-home-demo-two',
  templateUrl: './home-demo-two.component.html',
  styleUrls: ['./home-demo-two.component.scss']
})
export class HomeDemoTwoComponent implements OnInit {

  constructor(private servicios: ServiciosService) { }

  ngOnInit(): void {
    this.servicios.getServicios().subscribe((data: any) => {
      console.log(data);
    })
  }

}
