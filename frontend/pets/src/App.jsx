import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing"
import Form from "./pages/Form"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Chat from "./pages/Chat"

function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/form" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/chat" element={<Chat />} />
     </Routes>
    </>
  )
}

export default App
