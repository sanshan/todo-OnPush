import {IArrayMap} from "../../shared/helpers/interfaces/shared.interfaces";
import {IUser} from "../../models/user/user.model";

export const USERS_MOCK_DATA: IArrayMap<IUser>[] = [
  ['1', {
    _id: 1,
    login: 'user1',
    role: 'User'
  },
  ],
  ['2', {
    _id: 2,
    login: 'user2',
    role: 'User'
  },
  ],
  ['3', {
    _id: 3,
    login: 'admin',
    role: 'Administrator'
  }
  ]
];
