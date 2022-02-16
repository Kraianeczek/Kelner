import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/main/main";
import MissingPage from "./components/pages/missingpage/missingPage";
import Tables from "./components/pages/tables/tables";
import Footer from "./components/views/footer/footer";
import Header from "./components/views/header/header";
import { uploadTables } from "./redux/tablesRedux";

function App() {
  
const dispatch = useDispatch();
const url = "http://localhost:3131/api/tables";
const fetchTables = () => {
  fetch(url)
  .then(res => res.json())
  .then(tables => dispatch(uploadTables(tables)))
  };

  useEffect(fetchTables, [dispatch]);



  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tables/:id" element={<Tables />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
