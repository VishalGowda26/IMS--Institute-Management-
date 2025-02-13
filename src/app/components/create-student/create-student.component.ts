import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.min(1000000000),
      Validators.max(9999999999),
    ]),
    email: new FormControl('', [Validators.required]),
    batch: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl(),
      mandal: new FormControl(),
      district: new FormControl('', [Validators.required]),
      state: new FormControl(),
      pincode: new FormControl('', [
        Validators.required,
        Validators.min(100000),
        Validators.max(999999),
        noLeadingZero,
      ]),
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
        percentage: new FormControl('', [
          Validators.required,
          Validators.min(0),
          Validators.max(100),
        ]),
      })
    );
  }

  removeEducation(index: number) {
    this.eduFormArray.removeAt(index);
  }

  // submit() {
  //   console.log('Student Details', this.studentForm.value);
  // }

  submit() {
    this._studentService
      .createStudent(this.studentForm.value)
      .subscribe((data: any) => {
        alert('Student record successfully created!');
        console.log('Student Details', this.studentForm.value);
      });
  }

  constructor(private _studentService: StudentService) {
    this.studentForm.get('sourceType')?.valueChanges.subscribe((data: any) => {
      // Reset dynamic fields
      this.studentForm.removeControl('sourceForm');
      this.studentForm.removeControl('referralName');

      if (data === 'Direct') {
        // `sourceForm` stores only "socialmedia" or "office"
        this.studentForm.addControl('sourceForm', new FormControl());
      } else if (data === 'Refer') {
        this.studentForm.addControl('referralName', new FormControl());
      }
    });
  }
}

// Custom Validator Function to check if the first character is '0'
function noLeadingZero(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && value[0] === '0') {
    return { leadingZero: true }; // Return error if first character is '0'
  }
  return null; // Valid pincode
}
