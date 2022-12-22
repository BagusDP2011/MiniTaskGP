import {
    Box,
    Button,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom"

const End = ({answers, setAnswers}) => {
    const reset = () => {
        setAnswers([])
        // answers = []
    }

  return (
    <>

      <Box justifyContent="center" marginLeft={"50px"} marginTop="50px">
        <Text>Your Answers Sheet</Text>
        <Text>Answer Question 1: <strong>{answers[0]}</strong></Text>
        <Text>Answer Question 2: <strong>{answers[1]}</strong></Text>
        <Text>Answer Question 3: <strong>{answers[2]}</strong></Text>
        <Text>Answer Question 4: <strong>{answers[3]}</strong></Text>
        <Text>Answer Question 5: <strong>{answers[4]}</strong></Text>

        <Box justifyContent="end">
            <Link to="/Q1">
            <Button bgColor={"orange"} onClick={reset}>Start All Over</Button>
            </Link>
        </Box>
      </Box>
    </>
  );
};

export default End;
