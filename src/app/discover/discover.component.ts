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

  constructor(private endpoints: EndpointService) {
    this.endpoints.discoverMedia('movie', this.currentPage).subscribe(res => {
      this.mediaObjects = res.results;
      this.currentPage = res.page;
    })
   }

  ngOnInit(): void {
  }

  discoverMedia(mediaType, page) {
    this.mediaType = mediaType;
    this.endpoints.discoverMedia(mediaType, page).subscribe(res => {
      console.log(this.mediaObjects = res.results);
      this.currentPage = res.page;
    })
  }

  changePage(pageNumber){
    this.discoverMedia(this.mediaType, pageNumber);
    this.currentPage = pageNumber;

    for (let i = 6; i >= 0 ; i--){
      this.pagination[i] = pageNumber + (i - 3)
    }
  }

}
