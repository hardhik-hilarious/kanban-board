import React from 'react';
import TicketCard from './TicketCard';

const Board = ({ tickets }) => {
  return (
    <div className="board">
      {Object.entries(tickets).map(([key, ticketGroup]) => (
        <div className="column" key={key}>
          <h2>{key}</h2>
          {ticketGroup.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;