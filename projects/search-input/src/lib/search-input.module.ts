import { NgModule } from '@angular/core';
import { SearchInputService } from './search-input.service';
import { SearchInputComponent } from './search-input.component';

@NgModule({
  imports: [],
  exports: [SearchInputComponent],
  declarations: [SearchInputComponent],
  providers: [SearchInputService],
})
export class SearchModule { }
