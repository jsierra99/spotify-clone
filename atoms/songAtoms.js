import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState", //unique ID (with respect to toher atoms/selectors)
    default: null, // default value (aka initial value)
});

export const isPlayingState = atom({
    key: "isPlayingState",
    default: false,
});