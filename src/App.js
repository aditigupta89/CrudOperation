import React from "react";
import { BrowserRouter,Route,Routes , useSearchParams,} from "react-router-dom";
import EmployeeListing from "./Components/EmployeeListing";
import EmpCreate from "./Components/EmpCreate";
import EmpEdit from "./Components/EmpEdit";
import EmpDetails from "./Components/EmpDetails";
function App() {
  return (
    <div className="App">
   <h1 style={{textAlign:'center'}}>React Js Crud Operation</h1>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<EmployeeListing/>}/>
    <Route path="/empcreate" element={<EmpCreate/>}/>
    <Route path="/empedit/:id" element={<EmpEdit/>}/>
    <Route path="/empdetails/:id" element={<EmpDetails/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
