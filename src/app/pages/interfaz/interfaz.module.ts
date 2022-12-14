import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazPageRoutingModule } from './interfaz-routing.module';
import { InterfazPage } from './interfaz.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InterfazPage]
})
export class InterfazPageModule {}
