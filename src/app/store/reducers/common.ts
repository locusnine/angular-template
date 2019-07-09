import { ICommonState } from 'src/app/store/state/common';
import { CommonActions, ECommonActions } from 'src/app/store/actions/common';


export function commonReducers(
  state: ICommonState,
  action: CommonActions
): ICommonState {

  switch (action.type) {

    case ECommonActions.SetBusy: {
      return {
        ...state,
        isBusy: true
      };
    }

    case ECommonActions.UnsetBusy: {
      return {
        ...state,
        isBusy: false
      };
    }

    default:
      return state;
  }
};