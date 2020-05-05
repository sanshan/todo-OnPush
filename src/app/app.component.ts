import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IUser} from "./models/user/user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Collection} from "./shared/models/collection/collection.model";
import {USERS_MOCK_DATA} from "./_mock/users/users.mock";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  usersCollection: Collection<IUser>;

  users$: Observable<IUser[]>;

  ngOnInit(): void {
    this.usersCollection = new Collection<IUser>(USERS_MOCK_DATA);
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
