import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState", // Unique ID (with respect to other atoms/selectors)
  default: null, // default value also known as initial value
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});