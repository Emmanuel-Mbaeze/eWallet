import { atom } from "recoil";
import user from "./userInterface";
import { Wallet } from "./walletInterface";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const users = atom({
  key: "users",
  default: [] as Array<user> | null,
  effects_UNSTABLE: [persistAtom],
});

export const wallet = atom({
  key: "wallet",
  default: [] as Array<Wallet> | null,
  effects_UNSTABLE: [persistAtom],
});

export const account = atom({
  key: "account",
  default: [] as Array<Wallet> | null,
  effects_UNSTABLE: [persistAtom],
});
