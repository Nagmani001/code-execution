import { atom } from "jotai";


export const codeAtom = atom({
  source_code: "",
  language_id: 63,
});
export const language = atom("javascript");

export const output = atom({});

