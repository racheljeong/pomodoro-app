import {atom, selector} from "recoil";
import { recoilPersist } from "recoil-persist";

export const TOTAL_TIME = 60 * 25;
const { persistAtom } = recoilPersist();

export const timeState = atom<number>({
    key : "defaultTime",
    default : TOTAL_TIME
});

export const minuteState = selector({
    key : "minutes",
    get : ({get}) => {
        const minute = get(timeState);
        return minute < 0 ? 0 : Math.floor(TOTAL_TIME / 60)
    }
});


export const secondsState = selector ({
    key : "seconds",
    get : ({get}) => {
        const seconds = get(timeState);
        return seconds < 0 ? 0 : Math.floor(TOTAL_TIME % 60)
    }
})

//초기화
export const countState = atom<number>({
    key: 'count',
    default: 0,
    effects: [persistAtom],
  });

export const roundState = selector({
    key : "round",
    get : ({get}) => {
        const round = get(countState);
        return round % 4
    }
})

export const goalState = selector({
    key : "goal",
    get: ({get}) => {
        const goal = get(countState);
        return Math.floor(goal / 4);
    }
})


