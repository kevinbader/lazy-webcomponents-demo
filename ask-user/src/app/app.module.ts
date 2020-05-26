import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AskUserComponent } from './ask-user/ask-user.component';

@NgModule({
  declarations: [
    // AppComponent,
    AskUserComponent,
  ],
  entryComponents: [
    AskUserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    customElements.define('ask-user', createCustomElement(AskUserComponent, { injector: this.injector }));
  }
}
