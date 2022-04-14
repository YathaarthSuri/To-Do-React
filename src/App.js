import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import List from './List';

function App() {

  const [currentItem, setCurrentItem] = useState(null)      // [state, function]

  const [itemList, updateItemList] = useState([])    // since it is an array we start as an empty array and we will keep appending it

  const onChangeHandler = (e) => {                          // e is the event
    // console.log("Current Value", e.target.value)
    setCurrentItem(e.target.value)                    // so basically the latest item that user has typed gets stored in current item
  }

  const addItemToList = () => {
    updateItemList([...itemList, {item: currentItem, key: Date.now()}])
    setCurrentItem("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input placeholder='Add Item' value={currentItem} onChange={onChangeHandler}/>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
