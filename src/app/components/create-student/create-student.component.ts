import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    batch: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      mandal: new FormControl(),
      district: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    education: new FormArray([]),
    company: new FormGroup({
      name: new FormControl(),
      location: new FormControl(),
      package: new FormControl(),
      offerDate: new FormControl(),
    }),
    sourceType: new FormControl(),
  });

  get eduFormArray() {
    return this.studentForm.get('education') as FormArray;
  }

  addEducation() {
    this.eduFormArray.push(
      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      })
    );
    this.eduFormArray.reset();
  }

  removeEducation(index: number) {
    this.eduFormArray.removeAt(index);
  }

  submit() {
    console.log('Student Details', this.studentForm.value);
  }
}
