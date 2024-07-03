import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchInputService } from './search-input.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  constructor(protected readonly SearchInputService: SearchInputService) { }

  public onSearchChange($event: any): void {
    this.SearchInputService.changeSearchQuery($event.target.value);
  }

  @Output('onSearch') onSearchEmitter: EventEmitter<string> =
    new EventEmitter();
  private destroy$: Subject<void> = new Subject<void>();
}
