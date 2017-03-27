import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute} from '@angular/router';
import {DbcrudService}  from './dbcrud.service';


@Component({
  selector:'dbform',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private id:string;
  private fname:string;
 private lname:string;

  constructor(private dbcrudservice:DbcrudService) { }

  ngOnInit() {
	  
	  console.log('Before');
	  
  }

  onSubmit() {
	  console.log("firstname "+this.fname);
	  this.dbcrudservice.getDetails(this.id,this.fname,this.lname).subscribe(error=>console.log(error));
    
  }

  onClickMe()
  {
    console.log("I have been clicked and  I will now get all details");

  }

}
