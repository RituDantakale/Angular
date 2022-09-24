import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  courseList:string[]=["HTML:5","CSS","JavaScript","jQuery","JSON","PYTHON","Angular","MONGODB"];
    
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form.value);

}
}