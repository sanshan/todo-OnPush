import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnChanges {

  classes = {
    'todo-item': true,
    'first': false,
    'last': false
  }

  @Input() place: 'first | last' = undefined;
  @Input() text: string;

  ngOnChanges(): void {
    this.classes[this.place] = true;

    console.warn('From TodoItemComponent ngOnChanges() | Redraw item | text : ', this.text);
  }

}
