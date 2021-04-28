import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary">Save<button>
    `
})

export class CoursesComponent {
  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";

}
