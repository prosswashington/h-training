import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video;
  vID: string;
  vTitle: string;
  visible: boolean;

  constructor() { }

  ngOnInit(): void {
    this.vID = this.video.videoId;
    this.vTitle = this.video.vTitle;
    this.visible = false;

    const tag = document.createElement('script');
    tag.src = 'https://youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  toggleShow() {
    this.visible = !this.visible;
  }

  showVideo() {
    return this.visible === true ? 'show' : 'collapse';
  }
}
