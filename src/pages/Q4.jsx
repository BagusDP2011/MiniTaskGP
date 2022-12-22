import { Box, Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q4 = ({setAnswers}) => {
  const [value4, setValue4] = useState("Literally");
  const onAnswer = () => {
    setAnswers((prevAnswers) => {
      prevAnswers.push(value4);
      console.log({ prevAnswers });
      return prevAnswers;
    });
  };

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
        </Box>
      </Box>
    </>
  );
};

export default Q4;
