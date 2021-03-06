import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './themes/default';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <Stack direction={{base: "column" , sm: "row"}} divider={<StackDivider/>} spacing={2}/>