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
  currentPage = 1;
  pagination = [];

  constructor(private endpoint: EndpointService) {
    this.endpoint.discover('movie', this.currentPage).subscribe(res => {
      this.mediaObjects = res.results;
      this.currentPage = res.page
    })
   }

  ngOnInit(): void {
  }

  discoverMedia(mediaType, page) {
    this.mediaType = mediaType
    this.endpoint.discover(mediaType, page).subscribe(res => {
      this.mediaObjects = res.results;
      this.currentPage = res.page
      console.log(res);
    })
  }

  changePage(pageNumber){
    this.discoverMedia(this.mediaType, pageNumber)  
  }

}
