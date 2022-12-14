import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificatePageRoutingModule } from './verificate-routing.module';

import { VerificatePage } from './verificate.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificatePageRoutingModule,
    TranslateModule
  ],
  declarations: [VerificatePage]
})
export class VerificatePageModule {}
