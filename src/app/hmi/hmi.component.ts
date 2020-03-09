import { Component, OnInit } from '@angular/core';
import { Video } from '../video/video.model';
import { VideoService } from '../video/video.service';

@Component({
  selector: 'app-hmi',
  templateUrl: './hmi.component.html',
  styleUrls: ['./hmi.component.css']
})
export class HmiComponent implements OnInit {
  SpVideos: Video[];


  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.SpVideos = this.videoService.getSpVideos();
  }
}
