import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';  //property of app component
  data = 'Hello code';

  //Function
getValue(){
    return "This function returning value"
  }
}
