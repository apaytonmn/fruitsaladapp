import { GET_NEW_WATERMELON } from './watermelon.actions';
import * as programActions from './watermelon.actions';

// Watermelon reducer
export function reducer(state: any, action: programActions.WatermelonAction): any {
  switch (action.type) {            // Switch on the action type
    case GET_NEW_WATERMELON: {          // Handle get new watermelon action
      console.log('REDUCER ' + GET_NEW_WATERMELON);
      return {
        isSliced: false,            // For our new watermelon we need to initialize
        isSeedless: true,         // all properties of the watermelon
        color: 'red'
      };
    }
    default: {                      // Handle default
      return {
        ...state                    // Return the current state
      };
    }
  }
}