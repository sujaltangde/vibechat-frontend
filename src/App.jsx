

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Join } from './component/Join/Join';
import { Chat } from './component/Join/Chat';



function App() {



  return (
    <>
      <Routes>

        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />

      </Routes>



    </>
  );
}

export default App