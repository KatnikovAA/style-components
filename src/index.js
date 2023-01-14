import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
const root = ReactDOM.createRoot(document.getElementById('root'));
//* - универсальный селектор 
const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

// theme и ThemeProvider - это обертка для всего приложения - обычный объект на который ссылается каждый стиль, поменяли в объкте, поменялось везде
// media тоже самое просто объект где описаны какие могут быть форматы и в Console через пропс получаем и прописываем 
const theme = {
  colors:{
    primary:"green",
    secondary:"red"
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
}
}
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

