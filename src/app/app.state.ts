import { ActionReducerMap } from '@ngrx/store';
// Import everything from the banana state directory
import * as bananaStore from './banana/state';   
// Import everything from the watermelon state directory
import * as watermelonStore from './watermelon/state';   

// We are bringing everything we know about the banana up to the 
// application level. If we were creating the "fruit salad" application, 
// we would also bring the state information for other fruits into 
// this app level state. Each fruit would be considered a "slice" of 
// the application level state.

export interface AppState {
  banana: bananaStore.State;
  watermelon: watermelonStore.State;
}

export const initialState: AppState = {
  banana: bananaStore.initialState,
  watermelon: watermelonStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer,
  watermelon: watermelonStore.reducer
}

export const effects: Array<any> = [
  bananaStore.BananaEffects
];

// Selector to get banana slice of state
export const getMyBanana = (s: AppState) => s.banana;
// Selector to get watermelon slice of state
export const getMyWatermelon = (s: AppState) => s.watermelon;
