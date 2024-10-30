import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from "../base/base/base.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  
}
