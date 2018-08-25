import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  id:number=1;
  name:string='Eeranna';
  colors=["ORANGE","MAGENTA","RED","GREEN"];
  emp={id:1,
       name:"Eeranna",
       email:"veeru@gmail.com"
      };
  //ngIf
  isValid = true;
  PERSONS=[
    {personId:101,name:'Mahesh',age:25},
    {personId:102,name:'Ram',age:20},
    {personId:103,name:'Krishna',age:30},
    {personId:104,name:'Bharath',age:25}
  ];
  color="RED";
  ids=[1,2,3,4,5,6,7,8];
  result=50;

}
