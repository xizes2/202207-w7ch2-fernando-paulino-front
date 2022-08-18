export interface UserRegister {
  userName: string;
  password: string;
  image?: string;
}

export interface UserRegistered {
  id: string;
  userName: string;
  token: string;
  image?: string;
}
