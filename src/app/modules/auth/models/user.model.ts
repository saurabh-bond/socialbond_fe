import { APIResponse } from './api-response.model';
import { AuthModel } from './auth.model';

export class UserModel extends APIResponse {
  id: number;
  password: string;
  fullname: string;
  name: string;
  email: string;
  avatar: string;
  // account information
  language: string;
  timeZone: string;
  credits: number;

  setUser(_user: unknown) {
    const user = _user as UserModel;
    this.id = user.id;
    this.password = user.password || '';
    this.name = user.fullname || '';
    this.email = user.email || '';
    this.avatar = user.avatar || './assets/media/avatars/blank.png';
  }
}
