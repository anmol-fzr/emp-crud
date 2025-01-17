import { Component, OnInit } from '@angular/core';
import { Employee } from '@/app/models/employee';
import {
  UbTableDirective,
  UbTableCaptionDirective,
  UbTableHeaderDirective,
  UbTableRowDirective,
  UbTableHeadDirective,
  UbTableBodyDirective,
  UbTableCellDirective,
} from "@/components/ui/table";

import {
  UbPaginationContentDirective,
  UbPaginationDirective,
  UbPaginationEllipsisComponent,
  UbPaginationItemDirective,
  UbPaginationLinkDirective,
  UbPaginationNextDirective,
  UbPaginationPreviousDirective,
} from "@/components/ui/pagination"
import { EmployeeService } from '@/app/service/Employee.service';

@Component({
  selector: 'emp-list-page',
  imports: [
    UbTableDirective,
    UbTableCaptionDirective,
    UbTableHeaderDirective,
    UbTableRowDirective,
    UbTableHeadDirective,
    UbTableBodyDirective,
    UbTableCellDirective,

    // Pagination
    UbPaginationContentDirective,
    UbPaginationDirective,
    UbPaginationEllipsisComponent,
    UbPaginationItemDirective,
    UbPaginationLinkDirective,
    UbPaginationNextDirective,
    UbPaginationPreviousDirective,

  ],
  templateUrl: './emp.list.page.html',
})

export class EmpListPage implements OnInit {
  data: Employee[]
  isLoading: boolean
  currentPage = 1;

  constructor(private service: EmployeeService) { }

  fetchData() {
    this.isLoading = true
    this.service.getEmployees(this.currentPage).subscribe({
      next: (data) => {
        this.data = data
        this.isLoading = false
        console.log(data[0])
      },
      error: () => {
        this.isLoading = false
      }
    })
  }

  ngOnInit() {
    this.fetchData()
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchData();
    }
  }

  nextPage() {
    this.currentPage++;
    this.fetchData();
  }
}
