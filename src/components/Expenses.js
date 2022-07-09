import "./Expenses.css" ;
import ExpenseItem from './ExpenseItem';

function callback(item, index) {
    return <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date}/>
}

function Expenses ({Ex}){

    return (
        <div>
            {Ex.map(callback)}
            {/* <ExpenseItem 
        title = {newArr[0].title} 
        amount= {newArr[0].amount} 
        date= {newArr[0].date} 
      />
      <ExpenseItem 
        title = {newArr[1].title} 
        amount= {newArr[1].amount} 
        date= {newArr[1].date} 
      />
      <ExpenseItem 
        title = {newArr[2].title} 
        amount= {newArr[2].amount} 
        date= {newArr[2].date} 
      />
      <ExpenseItem 
        title = {newArr[3].title} 
        amount= {newArr[3].amount} 
        date= {newArr[3].date} 
      /> */}
        </div>
    )
}
export default Expenses ; 