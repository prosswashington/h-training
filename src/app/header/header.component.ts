import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  visible: boolean;

  toggleShow() {
    this.visible = !this.visible;
  }

  showItems() {
    return this.visible === true ? 'show' : 'collapse';
  }
}
