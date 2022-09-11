import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Para trabalhar com formulários reativos devemos importar o mesmo dentro do módulo em questão */
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [AppComponent, ReactiveFormsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
