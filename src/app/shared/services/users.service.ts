import {Injectable} from '@angular/core';
import {Collection} from "../models/collection/collection.model";
import {IUser} from "../../models/user/user.model";
import {USERS_MOCK_DATA} from "../../_mock/users/users.mock";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly _usersCollection: Collection<IUser>;

  constructor() {
    this._usersCollection = new Collection<IUser>(USERS_MOCK_DATA);
  }

  get usersCollection(): Collection<IUser> {
    return this._usersCollection;
  }
}
