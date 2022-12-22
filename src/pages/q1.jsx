import { Box, Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q1 = ({ setAnswers }) => {
  const [value1, setValue1] = useState("Justice");
  const onAnswer = () => {
    setAnswers((prevAnswers) => {
      prevAnswers.push(value1);
      console.log({ prevAnswers });
      return prevAnswers;
    });
  };

  return (
    <Box justifyContent="center" marginLeft={"50px"} marginTop="50px">
      <Text>Question 1:</Text>
      <Text fontWeight="bold" fontSize="2xl">
        I value
      </Text>
      <Text>Answer 1 Options:</Text>
      <RadioGroup onChange={setValue1} value={value1}>
        <Stack direction="row">
          <Radio value="Justice">Justice</Radio>
          <Radio value="Mercy">Mercy</Radio>
        </Stack>
      </RadioGroup>
      <br />
      <Box>
        <Text>You choosed: {value1}</Text>
      </Box>
      <Box justifyContent="end">
        <Link to="/Q2">
          <Button bgColor={"green"} borderColor="white" onClick={onAnswer}>
            Next
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Q1;
