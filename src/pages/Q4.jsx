import { Box, Button, Radio, RadioGroup, Stack, Text, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q4 = ({ setAnswers, jawaban4 }) => {
  const [value4, setValue4] = useState("Literally");
  const onAnswer = () => {
    setAnswers((prevAnswers) => {
      prevAnswers.push(value4);
      console.log({ prevAnswers });
      return prevAnswers;
    });
  };
  jawaban4(value4);
  return (
    <>
      <Box justifyContent="center" marginLeft={"50px"} marginTop="50px">
        <Text>Question 4:</Text>
        <Text fontWeight="bold" fontSize="2xl">
          I prefer speakers that communicate
        </Text>
        <Text>Answer 4 Options:</Text>
        <RadioGroup onChange={setValue4} value={value4}>
          <Stack direction="row">
            <Radio value="Literally">Literally</Radio>
            <Radio value="Figuratively">Figuratively</Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Box>
          <Text>You choosed: {value4}</Text>
        </Box>
        <Box justifyContent="end">
          <Link to="/Q5">
            <Button bgColor={"green"} borderColor="white" onClick={onAnswer}>
              Next
            </Button>
          </Link>
          <CircularProgress value={60} color="green.400">
            <CircularProgressLabel>60%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    </>
  );
};

export default Q4;
