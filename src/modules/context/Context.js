import React from 'react';

// This Context provider helps you handle global data or components.
// Used this for the swipe up modal.
const Context = React.createContext(null);

export const Provider = Context.Provider;
export default Context;
