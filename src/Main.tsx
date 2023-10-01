import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  timeState,
  minuteState,
  secondsState,
  countState,
  roundState,
  goalState,
  TOTAL_TIME
} from "./atom";
import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid";
import {
  Wrapper,
  Title,
  CounterContainer,
  MinutesCard,
  SecondsCard,
  timeCardVariant,
  OnPlayingButton,
  RoundSection,
  GoalSection,
  TurnoutSection,
  RoundDetail,
  Goal,
  GoalDetail,
  ComponentWrapper
} from "./style.css/PomodoroCss";

function Main() {
  const [time, setTime] = useRecoilState(timeState); //타이머 시간
  const [isStop, setIsStop] = useState(false); //일시정지 버튼 false == 재생중
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [count, setCount] = useRecoilState(countState);
  const minutes = useRecoilValue(minuteState);
  const seconds = useRecoilValue(secondsState);
  const round = useRecoilValue(roundState);
  const goal = useRecoilValue(goalState);

  useEffect(() => {
    if (!isStop) {
      const timer = setInterval(() => {
        setTime((time) => time - 1);
        if (time < 0) {
          clearInterval(timer);
          setTime(TOTAL_TIME);
          setCount((count) => count + 1);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStop, time, setCount, setTime]);

  //일시정지버튼
  const usePausing = () => {
    console.log("pausing");
    clearInterval(timer);

    if (isStop) {
      const timerId = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setTimer(timerId);
    }
    setIsStop((prev) => !prev);
  };

  return (
    <Wrapper>
      <CounterContainer>
        <Title>POMODORO</Title>
        <ComponentWrapper>
          <AnimatePresence>
            <MinutesCard
              key={minutes}
              variants={timeCardVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {String(Math.floor(time / 60)).padStart(2, "0")}
            </MinutesCard>
          </AnimatePresence>
          :
          <AnimatePresence>
            <SecondsCard
              key={seconds}
              variants={timeCardVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {String(time % 60).padStart(2, "0")}
            </SecondsCard>
          </AnimatePresence>
        </ComponentWrapper>
        <ComponentWrapper>
          <OnPlayingButton onClick={usePausing}>
            {isStop ? <PlayIcon /> : <PauseIcon />}
          </OnPlayingButton>
        </ComponentWrapper>
        <TurnoutSection>
          <RoundSection>
            <RoundDetail>{round} / 4</RoundDetail>
            <RoundDetail>ROUND</RoundDetail>
          </RoundSection>
          <GoalSection>
            <GoalDetail>{goal} / 12</GoalDetail>
            <GoalDetail>GOAL</GoalDetail>
          </GoalSection>
        </TurnoutSection>
      </CounterContainer>
    </Wrapper>
  );
}

export default Main;
