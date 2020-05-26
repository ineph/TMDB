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
  pagination = [0, 0, 0, 0, 1, 2 ,3];

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
    })
  }

  changePage(pageNumber){
    this.discoverMedia(this.mediaType, pageNumber)
    this.currentPage = pageNumber
    this.pagination[0] = pageNumber - 3
    this.pagination[1] = pageNumber - 2
    this.pagination[2] = pageNumber - 1
    this.pagination[3] = pageNumber
    this.pagination[4] = pageNumber + 1
    this.pagination[5] = pageNumber + 2
    this.pagination[6] = pageNumber + 3
  }

}
