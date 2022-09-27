import {
  Component,
  Input,
  HostBinding,
  OnInit,
  OnChanges
} from '@angular/core';

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

  constructor() {
    console.log('Ig post details constructor called');
  }

  ngOnChanges(): void {
    console.log('ng on changes.....................');
    this.updatePostDetails();
  }

  updatePostDetails() {
    console.log(this.img_url);
    console.log('count', this.count);
    // let newUri1 = new cDg('image1').view();
    // // let newUri2 = new cDg('image2').view();

    // console.log('New_Image_Url 1: ' + newUri1);
    //console.log('New_Image_Url 2: '+ newUri2);

    var url = this.img_url;
    console.log('Url ---->', url);
    const p = url.split('/');
    console.log('p ---->', url);
    var t = '';
    console.log('t ---->', url);
    for (let i = 0; i < p.length; i++) {
      if (i == 2) {
        console.log('I is 2');
        t +=
          p[i].replaceAll('-', '--').replaceAll('.', '-') +
          atob('LnRyYW5zbGF0ZS5nb29n') +
          '/';
        console.log('t ---->', t);
      } else {
        console.log('I is not 2---->');
        if (i != p.length - 1) {
          t += p[i] + '/';
        } else {
          t += p[i];
        }
        console.log('t ---->', t);
      }
    }
    this.img_url = encodeURI(t);
    console.log('final t ---->', t);
    console.log('Encoded t ---->', encodeURI(t));
  }
}
