import { Action } from '@ngrx/store';

// Constant names for our actions
export const GET_NEW_WATERMELON = 'Get New Watermelon';

// Every action will follow the same general pattern
// Actions do not make changes to the store, they trigger either a 
// reducer (which will update the store) or an effect (which will
// perform additional processing).

// Action to get a new watermelon
export class GetNewWatermelon implements Action {  
  // All actions have a type
  readonly type: string = GET_NEW_WATERMELON;      
  // All actions have a payload. The payload is any  
  // data that you want to pass to the action.
  constructor(public payload: any) {           
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + GET_NEW_WATERMELON);
  }
}

export type WatermelonAction = GetNewWatermelon;
