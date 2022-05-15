import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is the warning alert from template in .ts.</p>`,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
