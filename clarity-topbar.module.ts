import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';

import { ClarityTopbarComponent } from './clarity-topbar.component';
import { SharedModule } from 'shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ClarityTopbarComponent],
  entryComponents: [ClarityTopbarComponent]
})
export class ClarityTopbarModule {
  static entry = ClarityTopbarComponent;

  constructor() {
    console.log(this);
  }
}
