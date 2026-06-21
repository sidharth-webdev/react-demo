import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/home/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap';
import { DataBinding } from './components/data-binding/data-binding';
import { MouseEvents } from './components/mouse-events/mouse-event';
import { MouseAnimation } from './components/mouse-animation/mouse-animation';
import { ClassBinding } from './components/class-binding/class-binding';
import { MouseMove } from './components/mouse-move/mouse-move';
import { KeyDemo } from './components/key-demo/key-demo';
import { DebounceDemo } from './components/debounce-demo/debounce-demo';
import { FakestoreProducts } from './components/fakestore-products/fakestore-product';
import { ClipboardDemo } from './components/clipboard-demo/clipboard-demo';
import { FormDemo } from './components/form-demo/form-demo';
import { FormikDemo } from './components/formik-demo/formik-demo';
import { FormikComponent } from './components/formik-component/formik-component';
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo';
import { CustomDemo } from './components/custom-demo/custom-demo';
import { StateDemo } from './components/state-demo/state-demo';
import { CookiesProvider } from 'react-cookie';
import { Login } from './login';
import { HookDemo } from './components/hook-demo/hook-demo';
import { ContextDemo } from './components/context-demo/context-demo';
import { ReducerDemo } from './components/reducer-demo/reducer-demo';
import { Fakestore } from './components/fakestore/fakestore';
import { DemoComponent } from './class-component/demo-component';
import { MuiDemo } from './components/mui-demo/mui-demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FakestoreIndex } from './fakestore/fakestore-index';
root.render(
  
  <CookiesProvider>
    <ClassBinding/>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
