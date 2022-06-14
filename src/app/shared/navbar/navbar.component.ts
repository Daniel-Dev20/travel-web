import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public lang:any;
  public selectLanguage:string = '';
  constructor(private translateService:TranslateService) { }

  ngOnInit(): void {
  }

  cambiarLanguaje = () => {

    this.lang = document.querySelector('.selector');
    console.log('lenguaje:', this.lang.value);
    this.selectLanguage = this.lang.value;
    this.translateService.setDefaultLang('es');
    this.translateService.use(this.selectLanguage);
  }

}
