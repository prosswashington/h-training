import { Component, OnInit } from '@angular/core';

import { Video } from '../video/video.model';
import { VideoService } from '../video/video.service';

@Component({
  selector: 'app-plc',
  templateUrl: './plc.component.html',
  styleUrls: ['./plc.component.css']
})
export class PlcComponent implements OnInit {
  AcVideos: Video[];
  FtVideos: Video[];
  RslVideos: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.AcVideos = this.videoService.getAcVideos();
    this.FtVideos = this.videoService.getFtVideos();
    this.RslVideos = this.videoService.getRslVideos();
  }

}
