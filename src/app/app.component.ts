import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel-web';
  constructor(private translate:TranslateService){
    this.setAppLanguage();
  }

  setAppLanguage = () =>{
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
