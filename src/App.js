import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './components/Board';
import Filters from './components/Filters';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setTickets(response.data.tickets);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const handleGroupChange = (value) => {
    setGroupBy(value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const sortedTickets = tickets.sort((a, b) => {
    if (sortBy === 'priority') {
      return b.priority - a.priority;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  const groupedTickets = sortedTickets.reduce((acc, ticket) => {
    const key = ticket[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <Filters onGroupChange={handleGroupChange} onSortChange={handleSortChange} />
      <Board tickets={groupedTickets} />
    </div>
  );
};

export default App;