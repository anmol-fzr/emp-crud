import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EmployeeService } from "../service/Employee.service";

@Injectable({
  providedIn: "root"
})
export class DemoResolverService implements Resolve<any> {
  constructor(private _empService: EmployeeService) { }

  resolve() {
    return this._empService.getEmployees();
  }
}
