export interface IUser{
  id: number;
  name: string;
  email: string;
  photo: {
    path: string;
  }
}

export interface IGlobalState{
  users: IUser[]
}