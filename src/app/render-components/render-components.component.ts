import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

import { CustomDropdownComponent } from '../custom-dropdown/custom-dropdown.component';
import { CustomFooterComponent } from '../custom-footer/custom-footer.component';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { CustomSpinnerComponent } from '../custom-spinner/custom-spinner.component';
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { CustomTextboxComponent } from '../custom-textbox/custom-textbox.component';
import { CustomTimeComponent } from '../custom-time/custom-time.component';

@Component({
  selector: 'app-render-components',
  templateUrl: './render-components.component.html',
  styleUrls: ['./render-components.component.css']
})
export class RenderComponentsComponent  {



  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  renderComponent = CustomHeaderComponent;
  sendHeader(value){
    if(this.container.length == 1){
      this.container.remove();
    }
    if(value == 'header'){
      this.renderComponent = CustomHeaderComponent;
    }
    else if(value == 'table'){
      this.renderComponent = CustomTableComponent
    }
    else if(value == 'footer'){
      this.renderComponent = CustomFooterComponent
    }
    else if(value == 'button'){
      this.renderComponent = CustomButtonComponent
    }
    else if(value == 'textbox'){
      this.renderComponent = CustomTextboxComponent
    }
    else if(value == 'spinner'){
      this.renderComponent = CustomSpinnerComponent
    }
    else if(value == 'dropDown'){
      this.renderComponent = CustomDropdownComponent
    }
    else if(value == 'time'){
      this.renderComponent = CustomTimeComponent
    }

//  create the component factory
    const dynamicComponentFactory =
    this.componentFactoryResolver.resolveComponentFactory(this.renderComponent);
    const componentRef = this.container.createComponent(dynamicComponentFactory);

    //console.log("len ",this.container.length)

    if(this.container.length > 1 ){
      this.container.remove();
    }

  }

}
