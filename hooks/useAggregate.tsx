import React, {
    createContext, useContext, useMemo, useState
  } from 'react';

  
export interface IAggregate {
    name: string;
    dates: string[];
    close: number[];
    high: number[];
    low: number[];
    open: number[];
}

interface IAggregateContextData {
  aggregate?: IAggregate;
  setAggregate: React.Dispatch<React.SetStateAction<IAggregate | undefined>>;
}

interface IAggregateProviderProps {
  children: React.ReactNode;
}

const AggregateContext = createContext({} as IAggregateContextData);

const AggregateProvider = ({ children }: IAggregateProviderProps): JSX.Element => {
  const [aggregate, setAggregate] = useState<IAggregate>();
 
  const value: IAggregateContextData = useMemo(() => ({
    aggregate,
    setAggregate,    
  }),[aggregate]);

  return (
    <AggregateContext.Provider value={value}>
      {children}
    </AggregateContext.Provider>
  );
};

const useAggregate = ():IAggregateContextData => useContext(AggregateContext);


export { AggregateProvider, useAggregate };
