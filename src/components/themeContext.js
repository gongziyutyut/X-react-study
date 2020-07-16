import React from 'react';
export const themeContext = React.createContext({themeColor: 'red'})

export const UserContext = React.createContext()
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
