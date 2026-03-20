
let queue = [
  { id: "T101", priority: "HIGH", resolved: false },
  { id: "T102", priority: "MEDIUM", resolved: true },
  { id: "T103", priority: "LOW", resolved: false },
  { id: "T104", priority: "MEDIUM", resolved: false },
  { id: "T105", priority: "LOW", resolved: true }
];

queue.unshift({ id: "T100", priority: "HIGH", resolved: false });

queue.push(
  { id: "T106", priority: "MEDIUM", resolved: false },
  { id: "T107", priority: "LOW", resolved: false }
);

let currentTicket = queue.shift();

let droppedTicket = queue.pop();

let pending = queue.filter(ticket => !ticket.resolved);

let pendingIds = pending.map(ticket => ticket.id);

console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending Ids:", pendingIds);