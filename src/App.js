import React from 'react';
import Header from "./components/Header";
import Tasks from "./tasks";
import ExpenseForm from "./expense-form";
import ExpenseList from "./expense-list";
import ModalUser from "./modal";

const App = () => {
    return (
        <div>
          <Header />
            <Tasks />
            <ExpenseForm />
            <ExpenseList />
            <ModalUser />
        </div>
    );
};

export default App;