import {  Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'primeng-app';
  visibleSidebar1;

  @Output() public sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }


}
