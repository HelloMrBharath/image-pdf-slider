import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  public flexBorderSize: number = 3
  public flexImageSize: number = 7
  public galleryName: string = ''
  public images:any =[
    {
      "name": "image001.jpg",
      "date": "2015:07:02 19:52:01",
      'img-type':'jpeg',
      "preview_xxs": {
        "path": "http://oidamo.de/angular2-image-gallery/assets/img/gallery/preview_xxs/image004.JPG",

        "width": 500,
        "height": 375
      }
    },
    {
      "name": "image002.jpg",
      "date": "2015:02:27 23:49:03",
      'img-type':'png',
      "preview_xxs": {
        "path": "http://www.graphicsmagick.org/images/gm-107x76.png",
        "width": 259,
        "height": 375
      }
    },{
      "name": "image003.pdf",
      "date": "2015:02:27 23:49:03",
      'img-type':'pdf',
      "preview_xxs": {
        "path": "../assets/pdf-test.pdf",
        "width": 259,
        "height": 375
      }
    }];
  ngOnInit() {
  }

  onViewerVisibilityChanged(isVisible: boolean) {
    console.log('viewer visible: ' + isVisible)
  }
}
