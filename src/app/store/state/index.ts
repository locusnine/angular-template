import { ICommonState, initialCommonState } from 'src/app/store/state/common';


export interface IAppState {
  common: ICommonState
}

export const initialAppState: IAppState = {
  common: initialCommonState
};

export function getInitialState(): IAppState {
  return initialAppState;
}