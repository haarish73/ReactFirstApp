import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
  <>       
   
<Navbar></Navbar>
<div className="container my-3">
<Textform heading="character/word Count and convert the lowerCase and UpperCase character"/>
</div>
    </>
  );
}

export default App;
