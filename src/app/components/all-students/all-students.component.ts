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
}
