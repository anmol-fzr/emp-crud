import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/employee";
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})

export class EmployeeService {
  private pageSize = 10;

  constructor(private _http: HttpClient) { }

  getEmployees(page: number): Observable<Employee[]> {
    const params = {
      page: page,
      limit: this.pageSize,
    };

    let URL = "https://hub.dummyapis.com/employee";
    return this._http.get<Employee[]>(URL, { params });
  }


}
