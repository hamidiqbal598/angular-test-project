import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
      <h2>Employee Detail</h2>
      <h3> You Selected employee wiith ID: {{ employeeId }} </h3>
      <ul *ngFor="let employee of employees">
          <li >
              {{ employee.id }} . {{ employee.name }} - {{ employee.age }}
          </li>
      </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public employeeId:number;
  public employee:any;
  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
    //getting ID
    this.employeeId = parseInt(this._route.snapshot.paramMap.get('id'));

  }

}
