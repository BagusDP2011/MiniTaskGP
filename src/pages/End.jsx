import {
  Box,
  Button,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const End = ({
  answers,
  setAnswers,
  jawaban1,
  jawaban2,
  jawaban3,
  jawaban4,
  jawaban5,
}) => {
  const reset = () => {
    setAnswers([]);
    // answers = []
  };

  return (
    <>
      <Box justifyContent="center" marginLeft={"50px"} marginTop="50px">
        <Text>
          Your Answers Sheet{" "}
          <CircularProgress value={100} color="green.400">
            <CircularProgressLabel>100%</CircularProgressLabel>
          </CircularProgress>
        </Text>
        <Text>
          Answer Question 1: <strong>{jawaban1}</strong>
        </Text>
        <Text>
          Answer Question 2: <strong>{jawaban2}</strong>
        </Text>
        <Text>
          Answer Question 3: <strong>{jawaban3}</strong>
        </Text>
        <Text>
          Answer Question 4: <strong>{jawaban4}</strong>
        </Text>
        <Text>
          Answer Question 5: <strong>{jawaban5}</strong>
        </Text>
        {/* <Text>Answer Question 1: <strong>{answers[0]}</strong></Text>
        <Text>Answer Question 2: <strong>{answers[1]}</strong></Text>
        <Text>Answer Question 3: <strong>{answers[2]}</strong></Text>
        <Text>Answer Question 4: <strong>{answers[3]}</strong></Text>
        <Text>Answer Question 5: <strong>{answers[4]}</strong></Text> */}

        <Box justifyContent="end">
          <Link to="/">
            <Button bgColor={"orange"} onClick={reset}>
              Start All Over
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default End;
