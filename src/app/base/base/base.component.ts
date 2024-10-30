import { Component, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  user:any;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }


}

