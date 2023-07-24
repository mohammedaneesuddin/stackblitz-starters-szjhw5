import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';
import { TempService } from './services/temp.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,HeaderComponent,TempComponent
  ],
  providers: [TempService],  
  bootstrap: [AppComponent]
})
export class AppModule { }