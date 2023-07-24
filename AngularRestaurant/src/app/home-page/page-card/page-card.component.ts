import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css'],
})
export class PageCardComponent {
  @Input() public src: string = '';
  @Input() public alt: string = '';
  @Input() public text: string = 'Text';
  @Input() public buttonText: string = 'Button';
  @Input() public link: string = '';
}
