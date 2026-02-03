import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Atom to hold the authentication token
export const tokenState = atomWithStorage<string | null>("auth_token", null);

export interface UserInfo {
  id: string;
  name: string;
  avatar: string;
}

export const userState = atomWithStorage<UserInfo | null>("user_info", null);
