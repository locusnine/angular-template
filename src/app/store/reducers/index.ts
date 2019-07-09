import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state';
import { commonReducers } from 'src/app/store/reducers/common';


export const appReducers: ActionReducerMap<IAppState, any> = {
  common: commonReducers
};