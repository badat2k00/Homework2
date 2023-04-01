
import './App.css';
// import List from './List';
// import Input from './Input';
import Footer from './Footer';
function App() {
  return (
    <div className="App-container">
      <div className="inputcontainer">
        <input type="text" placeholder="Enter your task here..."/>
        </div>
       <hr />
    <input class="radiobtn" type="radio" name="task"/>
    <label>Clean up bedroom</label>
    <br/>
    <input class="radiobtn" type="radio" name="task"/>
    <label>Buy some milk</label>
    <br/>
    <input class="radiobtn" type="radio" name="task"/>
    <label>Jogging</label>
    <br/>
    <input class="radiobtn" type="radio" name="task"/>
    <label>Learn React</label>
    <br/>
    <input class="radiobtn" type="radio"name="task"/>
    <label>Doing Excercises</label>
    <br/>

    <Footer />
    </div>

    
  );
}

export default App;
