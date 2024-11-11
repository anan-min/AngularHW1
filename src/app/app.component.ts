import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent, HomeComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="cat.png" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
        <app-hello-world></app-hello-world>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularHW1';
}
