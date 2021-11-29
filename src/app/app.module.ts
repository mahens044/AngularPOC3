import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderComponentsComponent } from './render-components/render-components.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomSpinnerComponent } from './custom-spinner/custom-spinner.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomTextboxComponent } from './custom-textbox/custom-textbox.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { CustomTimeComponent } from './custom-time/custom-time.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderComponentsComponent,
    CustomHeaderComponent,
    CustomSpinnerComponent,
    CustomFooterComponent,
    CustomButtonComponent,
    CustomTextboxComponent,
    CustomDropdownComponent,
    CustomTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
