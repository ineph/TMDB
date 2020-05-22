import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoints.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  result;
  mediaObjects = [];
  mediaType = 'movie';
  page = 1;

  constructor(private endpoint: EndpointService) {
    this.endpoint.discover('movie', this.page).subscribe(res => this.mediaObjects = res.results)
   }

  ngOnInit(): void {
  }

  discover(mediaType) {
    this.mediaType = mediaType
    this.endpoint.discover(mediaType, this.page).subscribe(res => {
      this.mediaObjects = res.results
      console.log(res)
    })
  }

}
