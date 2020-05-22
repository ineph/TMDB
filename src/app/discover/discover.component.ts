import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoints.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  mediaObjects = [];
  mediaType = 'movie';
  page = 1;

  constructor(private endpoint: EndpointService) {
    this.endpoint.discover('movie', this.page).subscribe(res => this.mediaObjects = res.results)
   }

  ngOnInit(): void {
  }

  discoverMedia(mediaType, page) {
    this.mediaType = mediaType
    this.endpoint.discover(mediaType, page).subscribe(res => {
      this.mediaObjects = res.results
      console.log(res)
    })
  }

  changePage(pageNumber){
    this.discoverMedia(this.mediaType,pageNumber)
  }

}
