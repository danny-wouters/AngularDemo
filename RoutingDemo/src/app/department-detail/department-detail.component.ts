import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
