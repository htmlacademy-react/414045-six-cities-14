export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type AuthInfo = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export type UserInfo = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type AuthData = {
  email: string;
  password: string;
}

export type AuthToken = string;
