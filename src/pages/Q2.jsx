import { Box, Button, Radio, RadioGroup, Stack, Text, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q2 = ({ setAnswers, jawaban2 }) => {
  const [value2, setValue2] = useState("Rarely");
  const onAnswer = () => {
    setAnswers((prevAnswers) => {
      prevAnswers.push(value2);
      console.log({ prevAnswers });
      return prevAnswers;
    });
  };
  jawaban2(value2);
  return (
    <>
      <Box justifyContent="center">
        <Text>Question 2:</Text>
        <Text fontWeight="bold" fontSize="2xl">
          I appreciate a wide variety of music.
        </Text>
        <Text>Answer 2 Options:</Text>
        <RadioGroup onChange={setValue2} value={value2}>
          <Stack direction="row">
            <Radio value="Rarely">Rarely</Radio>
            <Radio value="Occasionally">Occasionally</Radio>
            <Radio value="Sometimes">Sometimes</Radio>
            <Radio value="Usually">Usually</Radio>
            <Radio value="Almost Always">Almost Always</Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Box>
          <Text>You choosed: {value2}</Text>
        </Box>
        <Box justifyContent="end">
          <Link to="/Q3">
            <Button bgColor={"green"} borderColor="white" onClick={onAnswer}>
              Next
            </Button>
            <CircularProgress value={20} color="green.400">
              <CircularProgressLabel>20%</CircularProgressLabel>
            </CircularProgress>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Q2;
