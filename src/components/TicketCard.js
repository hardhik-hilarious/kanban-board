// src/components/TicketCard.js

import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className={`ticket-card priority-${ticket.priority || 0}`}>
      <h3>{ticket.title || "No Title"}</h3>
      <p>{ticket.description || "No Description"}</p>
      <p>Assigned to: {ticket.assignedUser || "Unassigned"}</p>
    </div>
  );
};

export default TicketCard;
