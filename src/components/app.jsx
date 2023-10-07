import {ChoisePage} from '../pages/choise'
import { UploadPage } from '../pages/upload-file';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ChoisePage/>} />
        <Route path="upload" element={<UploadPage/>} />
      </Routes>
    </div>
  );
}

export default App;
