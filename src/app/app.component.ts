import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise';
  data: any[] = [];

  constructor(private http: HttpClient) { 
    /* this.http.get('https://api.spacexdata.com/v4/rockets').subscribe(data => {
      console.log(data);
    }); */
  }

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets').subscribe(data => {
      this.data = data as any[];
      console.log(data);
    });
  }
}
