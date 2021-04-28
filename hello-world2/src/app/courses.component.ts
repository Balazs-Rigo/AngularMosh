import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <button [style.backgroundcolor]="isActive ? 'blue' : 'white' ">Save<button>
    `
})

export class CoursesComponent {
  isActive = true;
}
