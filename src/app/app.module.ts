import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MoncomposantComponent } from './moncomposant/moncomposant.component';
import { MaDirectiveDirective } from './ma-directive.directive';
import { LoginComponent } from './views/login/login.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AuthentificationService } from './service/authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    MoncomposantComponent,
    MaDirectiveDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
