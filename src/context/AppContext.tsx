import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import type { TEntity } from '../types/data.types';

import { useFetchTransactions } from '../hooks/useFetchTransactions';
import { useFetchEntities } from '../hooks/useFetchEntities';

type AppState = {
  balancePoints: number;
  entities: TEntity[];
  getEntities: () => Promise<void>;
};

type AppProviderProps = PropsWithChildren<{}>;

type ACTION_TYPE =
  | { type: 'SET_POINTS'; payload: number }
  | { type: 'SET_ENTITIES'; payload: TEntity[] };

const initialState: AppState = {
  balancePoints: 0,
  entities: [],
  getEntities: () => Promise.resolve(),
};

const reducer = (state: AppState, action: ACTION_TYPE): AppState => {
  switch (action.type) {
    case 'SET_POINTS':
      return {
        ...state,
        balancePoints: action.payload,
      };
    case 'SET_ENTITIES':
      return {
        ...state,
        entities: action.payload,
      };
    default:
      return state;
  }
};

export const AppContext = createContext(initialState);

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }: AppProviderProps) => {
  const { data } = useFetchTransactions();
  const { getEntities: fetchEntities } = useFetchEntities();

  const [state, dispatch] = useReducer(reducer, initialState);

  const myPoints = useMemo(() => {
    return data.reduce((acc, current) => {
      return (acc += current.points);
    }, 0);
  }, [data]);

  useEffect(() => {
    dispatch({ type: 'SET_POINTS', payload: myPoints });
  }, [myPoints]);

  const getEntities = useCallback(async () => {
    const entitiesData = await fetchEntities();

    dispatch({ type: 'SET_ENTITIES', payload: entitiesData });
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getEntities }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
