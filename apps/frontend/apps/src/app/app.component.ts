import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message = 'default';

  constructor(private apiService: HttpService) {}

  ngOnInit() {
    this.apiService.hello().subscribe( (res) => {
        console.log(res.message);
        this.message = res.message;
    });
  }

}
