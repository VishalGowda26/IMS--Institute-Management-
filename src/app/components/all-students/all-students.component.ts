import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss'],
})
export class AllStudentsComponent implements OnInit {
  students: any = [];

  constructor(private _studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this._studentService.getStudents().subscribe((data: any) => {
      this.students = data;
      console.log('All-Students', this.students);
    });
  }

  limit: number = 0;
  page: number = 0;

  pagination() {
    this._studentService
      .getPagedStudents(this.limit, this.page)
      .subscribe((data: any) => {
        this.students = data;
        console.log(this.students);
      });
  }

  sort: string = '';
  order: string = '';

  sorting() {
    this._studentService
      .getSortedStudents(this.sort, this.order)
      .subscribe((data: any) => {
        this.students = data;
        console.log(this.students);
      });
  }

  word: string = '';
  filter() {
    this._studentService
      .getFilteredStudents(this.word)
      .subscribe((data: any) => {
        this.students = data;
        console.log(this.students);
      });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure to delete this record!') == true) {
      this._studentService.deleteStudent(id).subscribe(
        (data: any) => {
          alert('Student Record Deleted Successfully');
          this.getStudents();
        },
        (err: any) => {
          alert('Internal Server Error');
        }
      );
    } else {
      alert('You have Cancelled');
    }
  }

  percVary() {
    if (this.students.company.package <= 9) {
      {
        color: 'red';
      }
    } else {
      {
        color: 'green';
      }
    }
  }
}
