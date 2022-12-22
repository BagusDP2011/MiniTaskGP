import Q1 from "./pages/Q1"
import Q2 from "./pages/Q2"
import Q3 from "./pages/Q3"
import Q4 from "./pages/Q4"
import Q5 from "./pages/Q5"
import End from "./pages/End"
import { Box } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom"
import { useState } from "react"

function App() {
  const [answers, setAnswers] = useState([])

  return (
    <Box>

    <Routes>
      <Route path="/Q1" element={<Q1 setAnswers={setAnswers}/>} />
      <Route path="/Q2" element={<Q2 setAnswers={setAnswers}/>} />
      <Route path="/Q3" element={<Q3 setAnswers={setAnswers}/>} />
      <Route path="/Q4" element={<Q4 setAnswers={setAnswers}/>} />
      <Route path="/Q5" element={<Q5 setAnswers={setAnswers}/>} />
      <Route path="/End" element={<End answers={answers} setAnswers={setAnswers} />} />
    </Routes>
    </Box>
  );
}

export default App;
