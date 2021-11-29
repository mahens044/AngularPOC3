import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomHeaderComponent } from './custom-header/custom-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicRendering';

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  add(): void {
    // create the component factory
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomHeaderComponent);
    // add the component to the view
    const componentRef = this.container.createComponent(dynamicComponentFactory);
  }
}
