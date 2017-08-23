import { Component } from '@angular/core';

@Component({
  selector: 'ng-fire-component',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})
export class LibComponent {
  description = 'Mock angularfire for testing.';
}
