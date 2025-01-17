import { Component } from '@angular/core';
import {
  UbTableDirective,
  UbTableCaptionDirective,
  UbTableHeaderDirective,
  UbTableRowDirective,
  UbTableHeadDirective,
  UbTableBodyDirective,
  UbTableCellDirective,
} from "@/components/ui/table";

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
  ],
  templateUrl: './emp.list.page.html',
})

export class EmpListPage {
}
