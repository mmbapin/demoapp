import AppLayout from "./layout/AppLayout"
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, About, User} from "./pages"

function App() {
  return (
    <>
    <AppLayout>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </BrowserRouter>
    </AppLayout>
    </>
  );
}

export default App;
