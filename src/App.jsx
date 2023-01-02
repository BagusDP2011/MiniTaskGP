import Q1 from "./pages/Q1";
import Q2 from "./pages/Q2";
import Q3 from "./pages/Q3";
import Q4 from "./pages/Q4";
import Q5 from "./pages/Q5";
import End from "./pages/End";
import { Box, Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [answers, setAnswers] = useState([]);
  const [jawaban1, setJawaban1] = useState([]);
  const [jawaban2, setJawaban2] = useState([]);
  const [jawaban3, setJawaban3] = useState([]);
  const [jawaban4, setJawaban4] = useState([]);
  const [jawaban5, setJawaban5] = useState([]);

  return (
    <Box>
      {/* Routes Endpoint */}
      <Container justifyContent="center">
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/Q1"
          element={
            <Q1
              // setAnswers={setAnswers}
              jawaban1={setJawaban1}
            />
          }
        />
        <Route
          path="/Q2"
          element={
            <Q2
              // setAnswers={setAnswers}
              jawaban2={setJawaban2}
            />
          }
        />
        <Route
          path="/Q3"
          element={
            <Q3
              // setAnswers={setAnswers}
              jawaban3={setJawaban3}
            />
          }
        />
        <Route
          path="/Q4"
          element={
            <Q4
              // setAnswers={setAnswers}
              jawaban4={setJawaban4}
            />
          }
        />

        <Route
          path="/Q5"
          element={
            <Q5
              // setAnswers={setAnswers}
              jawaban5={setJawaban5}
            />
          }
        />
        <Route
          path="/End"
          element={
            <End
              // answers={answers} setAnswers={setAnswers}
              jawaban1={jawaban1}
              jawaban2={jawaban2}
              jawaban3={jawaban3}
              jawaban4={jawaban4}
              jawaban5={jawaban5}
            />
          }
        />
      </Routes>
      </Container>
      {/* Routes Endpoint */}
    </Box>
  );
}

export default App;
