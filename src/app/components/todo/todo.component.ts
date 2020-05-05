import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITodoComponent} from "../../models/todo/todo.model";
import {IUser} from "../../models/user/user.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements ITodoComponent<IUser> {

  @Input() items: IUser[]

}
