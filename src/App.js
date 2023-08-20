

import Nav1 from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';
import  './App.css';
function App() {
  return (
    <div className="App">
   <Nav1/>
   <div className='prt'>
   <Card/>
   <Card/>
   <Card/>
   </div>
    </div>
  );
}

export default App;
