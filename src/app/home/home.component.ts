import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sections = [
    {
      title:'PLC',
      content: 'This section contains three groups of videos: AssetCentre, FactoryTalk, and RSLogix.'
    },
    {
      title:'HMI',
      content: 'This section contains vidoes on System Platform.'
    },
    {
      title:'Course Project',
      content: 'Hands on project to practice items learned in videos.'
    }
  ]

}
