import React from 'react';

const TicketCard = ({ ticket }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 4: return 'urgent';
      case 3: return 'high';
      case 2: return 'medium';
      case 1: return 'low';
      default: return 'no-priority';
    }
  };

  return (
    <div className={`ticket-card ${getPriorityClass(ticket.priority)}`}>
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
