export interface User{
    id: number;
    name: string;
    email: string;
    avatarUrl?: string;
    password?: string;
}

export type PublicUser = Omit<User, 'password'>