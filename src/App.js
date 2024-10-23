import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Dropdown from './components/Dropdown';
import './styles.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');  // Default: group by status
  const [sortType, setSortType] = useState('priority'); // Default: sort by priority

  useEffect(() => {
    // Fetch tickets from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Log to ensure the correct format
        if (Array.isArray(data)) {
          setTickets(data);
        } else if (data.tickets) {
          setTickets(data.tickets);  // Adjust according to API structure
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app-container">
      <h1>Kanban Board</h1>

      {/* Grouping and Sorting Controls */}
      <div className="controls">
        <Dropdown label="Grouping" options={['status', 'user', 'priority']} onChange={setGrouping} />
        <Dropdown label="Ordering" options={['priority', 'title']} onChange={setSortType} />
      </div>

      {/* Kanban Board Component */}
      <KanbanBoard tickets={tickets} grouping={grouping} sortType={sortType} />
    </div>
  );
};

export default App;
