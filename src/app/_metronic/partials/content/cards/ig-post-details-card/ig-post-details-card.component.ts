import {
  Component,
  Input,
  HostBinding,
  OnInit,
  OnChanges
} from '@angular/core';
import { Helpers } from 'src/app/helpers';

@Component({
  selector: 'app-ig-post-details-card',
  templateUrl: './ig-post-details-card.component.html',
  styleUrls: ['./ig-post-details-card.component.css']
})
export class IgPostDetailsCardComponent implements OnChanges {
  @Input() img_url: string = '';
  @Input() name: string = '';
  @Input() url: string = '';
  @Input() caption: string = '';
  @Input() count: {} = {};
  @HostBinding('class') class = 'card';

  constructor() {}

  ngOnChanges(): void {
    this.updatePostDetails();
  }

  updatePostDetails() {
    this.img_url = Helpers.processIgURL(this.img_url);
  }
}
