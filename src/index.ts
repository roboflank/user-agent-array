import userAgents from "./user-agents.json";
const randomUserAgent =
  userAgents[Math.floor(Math.random() * userAgents.length)];
export { userAgents, randomUserAgent };
