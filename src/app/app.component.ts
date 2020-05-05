import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IUser} from "./models/user/user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UsersService} from "./shared/services/users.service";
import {Collection} from "./shared/models/collection/collection.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(private _u: UsersService) {
  }

  get usersCollection(): Collection<IUser> {
    return this._u.usersCollection;
  }

  ngOnInit(): void {
    this.users$ = this.usersCollection.items$.pipe(
      map((value) => Array.from(value).map((item) => item[1]))
    )
  }

  renameRandomUser(): void {
    const user = this.usersCollection.getRandomItem();
    user.login = `New login ${Date.now()}`;

    this.usersCollection.update([user._id.toString(), user]);
  }

}
