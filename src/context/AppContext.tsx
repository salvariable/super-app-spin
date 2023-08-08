import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { useFetchTransactions } from '../hooks/useFetchTransactions';

type AppState = {
  balancePoints: number;
};

type AppProviderProps = PropsWithChildren<{}>;

type ACTION_TYPE = { type: 'SET_POINTS'; payload: number };

const initialState: AppState = {
  balancePoints: 0,
};

const reducer = (state: AppState, action: ACTION_TYPE): AppState => {
  switch (action.type) {
    case 'SET_POINTS':
      return {
        ...state,
        balancePoints: action.payload,
      };
    default:
      return state;
  }
};

export const AppContext = createContext(initialState);

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }: AppProviderProps) => {
  const { data } = useFetchTransactions();

  const [state, dispatch] = useReducer(reducer, initialState);

  const myPoints = useMemo(() => {
    return data.reduce((acc, current) => {
      return (acc += current.points);
    }, 0);
  }, [data]);

  useEffect(() => {
    dispatch({ type: 'SET_POINTS', payload: myPoints });
  }, [myPoints]);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
