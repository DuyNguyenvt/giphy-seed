import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ModalsComponent } from './modals.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { AngularMaterialModule } from 'src/app/modules/common/angularMaterial/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // ModalsComponent,
    ModalInfoComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  // exports: [
  //   // ModalsComponent,
  //   ModalInfoComponent,
  // ],
})
export class ModalsModule {}
