import { Box, Button, Radio, RadioGroup, Stack, Text, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q5 = ({ setAnswers, jawaban5 }) => {
  const [value5, setValue5] = useState("Brief and to the point");
  const onAnswer = () => {
    setAnswers((prevAnswers) => {
      prevAnswers.push(value5);
      console.log({ prevAnswers });
      return prevAnswers;
    });
  };
  jawaban5(value5);
  return (
    <>
      <Box justifyContent="center">
        <Text>Question 4:</Text>
        <Text fontWeight="bold" fontSize="2xl">
          With people, I am more often
        </Text>
        <Text>Answer 4 Options:</Text>
        <RadioGroup onChange={setValue5} value={value5}>
          <Stack direction="row">
            <Radio value="Brief and to the point">Brief and to the point</Radio>
            <Radio value="Friendly and warm">Friendly and warm</Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Box>
          <Text>You choosed: {value5}</Text>
        </Box>
        <Box justifyContent="end">
          <Link to="/end">
            <Button bgColor={"green"} borderColor="white" onClick={onAnswer}>
              END
            </Button>
          </Link>
          <CircularProgress value={80} color="green.400">
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    </>
  );
};

export default Q5;
