import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: "products/:productId", component: LoginComponent },
    ])
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    TopBarComponent, 
    LoginComponent, 
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
