import React, {useState} from 'react';

import "./Expenses.css" ;
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import ExpensesFilter from './ExpenseFilter';

const callback = (item, index) => {
    return <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date}/>
}

function Expenses ({Ex}){
   
    const [filteredYear , setFilteredYear]= useState('2020');

    const filterChangedHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    return (
      <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangedHandler}/>
            {Ex.map(callback)}
            {/* <ExpenseItem 
        title = {Ex[0].title} 
        amount= {Ex[0].amount} 
        date= {Ex[0].date} 
      />
      <ExpenseItem 
        title = {Ex[1].title} 
        amount= {Ex[1].amount} 
        date= {Ex[1].date} 
      />
      <ExpenseItem 
        title = {Ex[2].title} 
        amount= {Ex[2].amount} 
        date= {Ex[2].date} 
      />
      <ExpenseItem 
        title = {Ex[3].title} 
        amount= {Ex[3].amount} 
        date= {Ex[3].date} 
      /> */}
        </Card>
        </div>
    )
}
export default Expenses ; 