import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {
  student: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _studentService: StudentService
  ) {
    _activatedRoute.params.subscribe((data: any) => {
      console.log('Student id:', data.id);
      this._studentService.getStudent(data.id).subscribe((data: any) => {
        this.student = data;
        console.log('Student details:', this.student);
      });
    });
  }
}
