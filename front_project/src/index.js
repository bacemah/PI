import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './HomeScreen';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import SignScreen from './Screen/Sign/SignScreen';
import FormScreen from './Screen/Form/FormScreen';
import SignUp from './Screen/Signup/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<HomeScreen />}/>
            <Route path="/" element={<HomeScreen />}/>
            <Route  path='/SignIn' element={<SignScreen />} />
            <Route  path='/Add' element={<FormScreen />} />
            <Route path='SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
