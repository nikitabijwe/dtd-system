import { configureStore } from '@reduxjs/toolkit';
import simulationReducer from './reducers/simulationReducer';


const store = configureStore({
    reducer: {
      simulation: simulationReducer
    }
  });

export default store;
