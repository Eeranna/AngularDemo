import { Component, OnInit } from '@angular/core';
import { StatusPipe} from '../status.pipe';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'LTI';
  todaydate = new Date();
  person = {name: 'Eeranna', age: '33', address: {a1: 'Mumbai', a2: 'Bangalore'}};
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  PERSONS = [
             {personId: 101, name: 'Mahesh', age: 25, stat: 1},
             {personId: 102, name: 'Ram', age: 20, stat: 2},
             {personId: 103, name: 'Krishna', age: 30, stat: 3},
             {personId: 104, name: 'Bharath', age: 25, stat: 4}
            ];

}
