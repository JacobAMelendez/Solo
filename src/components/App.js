// import React, {Component} from 'react';

// class App extends Component {
//     render() {
//         return (

//         )
//     }
// }
import React from 'react';
// import MainContainer from './containers/MainContainer.jsx';
import ReactDOM from 'react-dom/client';

const App = () => {
  return(
    //checkout hiearchy structure to ensure proper components 
    <div>
      <h1>hello world</h1>
      
    </div>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
// root.render(<App />); 
export default App;