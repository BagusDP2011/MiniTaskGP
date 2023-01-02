import { Box, Button, Radio, RadioGroup, Stack, Text, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q3 = ({ setAnswers, jawaban3 }) => {
  const [value3, setValue3] = useState("Boring");
  const onAnswer = () => {
    setAnswers((prevAnswers) => {
      prevAnswers.push(value3);
      console.log({ prevAnswers });
      return prevAnswers;
    });
  };

  jawaban3(value3);
  return (
    <>
      <Box justifyContent="center" marginLeft={"50px"} marginTop="50px">
        <Text>Question 3:</Text>
        <Text fontWeight="bold" fontSize="2xl">
          A quiet weekend at home is
        </Text>
        <Text>Answer 3 Options:</Text>
        <RadioGroup onChange={setValue3} value={value3}>
          <Stack direction="row">
            <Radio value="Boring">Boring</Radio>
            <Radio value="Rejuvenating">Rejuvenating</Radio>
          </Stack>
        </RadioGroup>
        <br />
        <Box>
          <Text>You choosed: {value3}</Text>
        </Box>
        <Box justifyContent="end">
          <Link to="/Q4">
            <Button bgColor={"green"} borderColor="white" onClick={onAnswer}>
              Next
            </Button>
            <CircularProgress value={40} color="green.400">
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Q3;
