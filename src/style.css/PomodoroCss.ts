import { createGlobalStyle, styled} from "styled-components";
import { motion, AnimatePresence } from "framer-motion";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 56px;
    text-align: center;
    color: beige;
    margin: 50px;
    padding: 30px;
    //text-shadow: 1px 1px 1px 2px #ecc64b;
`;  




export const CounterContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: tomato;
`;


export const MinutesCard = styled(motion.div)`
    justify-content : center ;
    align-items: center;
    background-color: beige;
    color: tomato;
    font-size: 48px;
    display: flex;
    width: 150px;
    height: 200px;
    border-radius: 15px;
    //position: absolute;
    backface-visibility: hidden;
    display: flex;
`;


export const SecondsCard = styled(motion.div)`
    justify-content : center ;
    align-items: center;
    background-color: beige;
    color: tomato;
    font-size: 48px;
    display: flex;
    width: 150px;
    height: 200px;
    border-radius: 15px;
    //position: absolute;
    backface-visibility: hidden;
    display: flex;
`;

// const TimeGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     width: 50vw;
//     gap: 10px;
// `;

export const timeCardVariant = {
    initial: { rotateY: 180, opacity: 0 },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      rotateY: -180,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };



  export const OnPlayingButton = styled(motion.button)`
    border-radius: 15px;
    color: tomato;
    background-color: beige;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    font-size: 50px;
 
`;


export const RoundSection = styled.div`
    width: 150px;
    height: 70px;
    font-size: 32px;
    text-align: center;
    color: beige;
    //padding: 30px;
    margin: 20px;

`;

export const GoalSection = styled.div`
    width: 150px;
    height: 70px;
    font-size: 32px;
    text-align: center;
    color: beige;
    //padding: 30px;
    margin: 20px;
    

`;

export const TurnoutSection = styled.div`
    place-items: center; 
    display: grid;
    grid-template-columns: repeat(2, 400px);
    width: 50vw;
    gap: 10px;
    margin: 40px;
`;

export const RoundDetail = styled.div`
    width: 150px;
    height: 70px;
    color: beige;
`;

export const Goal = styled.div`
    width: 150px;
    height: 70px;
    font-size: 32px;
    text-align: center;
    color: beige;

`;

export const GoalDetail = styled.div`
    width: 150px;
    height: 70px;
    color: beige;
`;

export const ComponentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 20px;
`;

