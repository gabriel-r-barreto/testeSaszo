import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from './services/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testeSazso';
  list: any;
  email: any;
  password: any;
  placa: any;
  dadosPlaca: any;
  token: any;
  dados: any;
  dadosList: any;

  constructor(

    // private router: Router,
    // private route: ActivatedRoute,
    private systemService: SystemService,

  ) { }


  ngOnInit() {

    this.placa = false;

  }


  Login() {

    this.list = {

      'email': this.email,
      'password': this.password

    }

    this.systemService.getLogin(this.list).subscribe({
      next: (result) => {

        //@ts-ignore
        if (result.data != null) {
          this.placa = true;
          //@ts-ignore
          this.token = result.data
          this.getList(this.token);
        }

      },

    });

  }


  getPlaca() {

    this.systemService.getPlaca(this.dadosPlaca, this.token).subscribe({
      next: (result) => {

        //@ts-ignore
        this.dados = result.data;

      },



    });
  }


  getList(token) {
    this.systemService.getListByConsult(token).subscribe({
      next: (result) => {

        //@ts-ignore
        this.dadosList = result.data.list;

      },



    });
  }




}
