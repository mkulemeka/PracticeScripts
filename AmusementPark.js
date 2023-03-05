/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
  const visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  };
  return visitor;
  throw new Error("Please implement the createVisitor function.");
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {visitor} the visitor without a ticket
 */
function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
  throw new Error("Please implement the revokeTicket function.");
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
  if (!tickets.hasOwnProperty(ticketId)) return "unknown ticket id";
  if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
  throw new Error("Please implement the ticketStatus function.");
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function simpleTicketStatus(tickets, ticketId) {
  if (!tickets.hasOwnProperty(ticketId) || tickets[ticketId] === null)
    return "invalid ticket !!!";
  else return `${tickets[ticketId]}`;
  throw new Error("Please implement the simpleTicketStatus function.");
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
  if (visitor.hasOwnProperty("gtc")) {
    return visitor["gtc"].version;
  } else {
    return undefined;
  }
  throw new Error("Please implement the gtcVersion function.");
}
