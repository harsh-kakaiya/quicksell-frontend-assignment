import React from 'react';
import TicketCard from './TicketCard';

const KanbanBoard = ({ tickets, grouping, sortType }) => {
  const groupTickets = (tickets) => {
    if (!Array.isArray(tickets)) return {};  // Ensure tickets is an array

    return tickets.reduce((acc, ticket) => {
      const groupKey = ticket[grouping];  // Group by status/user/priority
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(ticket);
      return acc;
    }, {});
  };

  const sortTickets = (group) => {
    return group.sort((a, b) => {
      if (sortType === 'priority') {
        return b.priority - a.priority; // Sort by priority (descending)
      } else {
        return a.title.localeCompare(b.title); // Sort by title (ascending)
      }
    });
  };

  const groupedTickets = groupTickets(tickets);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group, index) => (
        <div key={index} className="kanban-column">
          <h3>{group}</h3>
          {sortTickets(groupedTickets[group]).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
