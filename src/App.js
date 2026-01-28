
import './App.css';
import Header from './Header';
import Product from './Product';
import { useDispatch } from 'react-redux';
import {clearAllItem} from './redux/Slice'

function App() {
  const dispatch=useDispatch()
  return (
    <>
    <Header/>
    <h1>React Redux ToolKit</h1>
    <button onClick={()=>{dispatch(clearAllItem)}}>Clear Item</button>
    <Product/>
    </>
  );
}

export default App;
