import { Component } from '@angular/core';
import { SessionService } from 'src/app/common/services/session.service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'accops-remote-diagnostics';
  isBusy: boolean;

  constructor(
    private store: Store<IAppState>,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.store
      .select((state: IAppState) => state.common)
      .subscribe(common =>
        this.isBusy = common.isBusy
      );
  }

  login() {
    this.sessionService.login('username', 'password')
  }

}
