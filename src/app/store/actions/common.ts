import { Action } from '@ngrx/store';

export enum ECommonActions {
  SetBusy = '[Admin] Set user',
  UnsetBusy = '[Admin] Update user',
}

export class SetBusy implements Action {
  public readonly type = ECommonActions.SetBusy;
  constructor() { }
}

export class UnsetBusy implements Action {
  public readonly type = ECommonActions.UnsetBusy;
  constructor() { }
}


export type CommonActions =
  SetBusy |
  UnsetBusy
