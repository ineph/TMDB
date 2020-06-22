import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointService } from '../shared/services/endpoints.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  media;
  mediaType;

  constructor(
    route: ActivatedRoute,
    endpoints: EndpointService) {
      route.params.subscribe(route => {
        endpoints.getMediaById(route.media, route.id).subscribe(res => {
          console.log(this.media = res);
          this.mediaType = route.media
        });
      });
     }

  ngOnInit(): void {
  }

}
