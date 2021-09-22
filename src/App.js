import { useState } from 'react';
import foods from './foods.json';
import './App.css';
import { Row, Divider, Button } from "antd";
import FoodBox from './components/FoodBox'

function App() {
  const [food, setFood] = useState(foods)
  return (
    <div className="App">
     <Button> Hide Form / Add New Food </Button>
      <Divider>Food List</Divider>
         {food.map(item => {
           return (
          <Row style={{ width: "100%", justifyContent: "center" }}>
          <FoodBox food={item} />
          </Row>
           )
        })}
        )
      
    </div>
  );
}

export default App;
