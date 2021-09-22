import { useState } from 'react';
import foods from './foods.json';
import './App.css';
import { Row, Divider, Button } from "antd";
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';
let displayMessage = false;

function App() {
  const [food, setFood] = useState(foods)
  const [filterData, setFilterData] = useState(foods)
  const [isFormHidden, setIsFormHidden] = useState(true)

  const addNewFoodItem = newFoodItem =>{
   
    const updatedFood = [...food, newFoodItem];
    setFood(updatedFood);
  }

  const filterResults = str => {
    const filterMatch = filterData.filter( item => {return item.name.includes(str)})
    setFood(filterMatch);
  }

  const removeItem = foodObj => {
    const newList = food.filter( item => { return item.name !== foodObj.name})
    setFood(newList)
    if(food.length === 1) displayMessage = true
  }

  function hideForm(){
    if(isFormHidden) setIsFormHidden(current => !current)
    else setIsFormHidden(current => current = true)
  }

  console.log('line 38', isFormHidden)

  return (
    <div className="App">
        {isFormHidden ? <Button onClick={() => hideForm()}>Add New Food </Button> : <Button onClick={() => hideForm()}>Hide Form</Button>}
     {!isFormHidden ? <AddFoodForm addFood={addNewFoodItem} /> : ''}
     <SearchFood filteredResults={filterResults} />
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
         {food.map(item => {
           return (
          <FoodBox food={[item, removeItem]} />
           )
        })}
        </Row>
        {displayMessage ? <h3>Food is empty</h3> : ''}
    </div>
        )
}

export default App;
