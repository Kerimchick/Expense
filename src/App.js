import React from 'react';
import Header from "./components/Header";
import Tasks from "./views/tasks";
import ExpenseForm from "./views/expense-form";
import ExpenseList from "./views/expense-list";

const App = () => {
    return (
        <div>
          <Header />
            <Tasks />
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
};

export default App;