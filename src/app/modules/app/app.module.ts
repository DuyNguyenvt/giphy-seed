import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalsModule } from 'src/app/modules/modals/modals.module';
// import { ModalsComponent } from 'src/app/modules/modals/modals.component';
// import { ModalInfoComponent } from 'src/app/modules/modals/components/modal-info/modal-info.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ModalsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
