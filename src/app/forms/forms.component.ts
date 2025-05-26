import { Component, Inject, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { DialogRef } from '@angular/cdk/dialog';
 import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { EmailService } from '../services/email.service';
 import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  image = "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
 
   loading = false;
   buttonText = "Submit"; 
  
   // Available roles and genders
   roles = ['Select', 'Male', 'Female', 'Other'];
   genders = ['Male', 'Female', 'Other']; // Added this line to define genders

   // Form Group Definition
   form: FormGroup;

  constructor(
    private service: EmailService,
    private dialogRef: DialogRef<FormsComponent>,
    @Inject(MAT_DIALOG_DATA) public row: any,
    public http: HttpService
  ) {
    // Initialize the form
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      contact: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
    });

     // If row data is provided, populate the form fields
     if (row) {
       this.form.patchValue(row);
     }
   }

  ngOnInit() {
     console.log(this.http.test);
  }

   addRec() {
     if (this.form.valid) {
       console.warn("Form is Valid , Subbmitting the form" , this.form.value);
       this.service.addEmailService(this.form.value).subscribe({
         next: (val: any) => {
          console.log("Service call successful:", val);
           alert('Registered successfully');
           this.form.reset();
           this.dialogRef.close();
         },
         error: (err: any) => {
           console.warn( "service call error:",err);
         }
       });
     }else {
      console.warn('Form is invalid');
    }

   }

   register() {
     this.loading = true;
     this.buttonText = "Submitting...";
    
     const user = {
       name: this.form.get('name')?.value,
       email: this.form.get('email')?.value
     };
    
     this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
       data => {
         const res: any = data;
         console.log(`${user.name} is successfully registered and mail has been sent with message id: ${res.messageId}`);
       },
       err => {
         console.log(err);
         this.loading = false;
         this.buttonText = "Submit";
       },
       () => {
         this.loading = false;
         this.buttonText = "Submit";
       }
     );
   }
}

