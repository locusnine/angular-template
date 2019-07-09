import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  constructor(
    private http: HttpClient,
    private toaster: ToastrService
  ) { }

  async login(username: string, password: string) {
    let result: any = await this.http.get(`${environment.apiUrl}/todos/1`).toPromise()
    this.toaster.success('Logged in!')
  }

}