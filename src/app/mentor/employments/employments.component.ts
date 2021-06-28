import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorModule } from '../mentor.module';
import { MentorserviceService } from '../mentorservice.service';
import { MentorProfile, UserEmployment } from '../types';

@Component({
  selector: 'app-employments',
  templateUrl: './employments.component.html',
  styleUrls: ['./employments.component.css']
})
export class EmploymentsComponent implements OnInit {

  mentorProfile: MentorProfile;
  experienceForm:FormGroup

  userEmployments:UserEmployment;

  constructor(private formbuilder: FormBuilder, private mentorService: MentorserviceService) {
    this.getMentorProfile();
   }

  ngOnInit(): void {
    this.experienceForm = this.formbuilder.group({
      companyName: ['', Validators.required],
      description: ['', Validators.required],
      designationRole: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      isCurrent: ['', Validators.required],
      userTechnologies:['',Validators.required]
    })
  }

  getMentorProfile() {
    this.mentorService.getMentorProfile().subscribe((data) => {
      console.log("mentor profile data:::" + data)
      this.mentorProfile = data.data;
      this.userEmployments=this.mentorProfile.UserEmployments[0];
    },
      (error) => {
      })
  }


}
