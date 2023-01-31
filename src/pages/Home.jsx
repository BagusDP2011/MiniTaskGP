import {
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q1 = () => {

  return (
    <Box justifyContent="center">
      <Box>
        <Text>Hello Everyone!</Text>
        <Text>This is a interview project test by GRIP Principle</Text>
        <Text>Interview Person: Bagus Dwi Putra</Text>
        <br />
        <Text>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/bagus-dwi-putra/">
          https://www.linkedin.com/in/bagus-dwi-putra/
          </a>
        </Text>
        <br />
        <Link to="/Q1">
          <Button bgColor={"blue.400"} borderColor="white" width="100px">
            Start
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Q1;
