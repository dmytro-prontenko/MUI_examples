import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import MUI_Typography from "./components/MUI/MUI_Typography";
import MUI_TextField from "./components/MUI/MUI_TextField";
import MUI_Button from "./components/MUI/MUI_Button";
import MUI_Select from "./components/MUI/MUI_Select";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/typography" element={<MUI_Typography />} />
        <Route path="/buttons" element={<MUI_Button />} />
        <Route path="/text-field" element={<MUI_TextField />} />
        <Route path="/typography" element={<MUI_TextField />} />
        <Route path="/select" element={<MUI_Select />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
