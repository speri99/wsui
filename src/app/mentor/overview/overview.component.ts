import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorserviceService } from '../mentorservice.service';
import { MentorProfile } from "../types"

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


  overviewForm: FormGroup;
  mentorProfile: MentorProfile;

  constructor(private formbuilder: FormBuilder, private mentorService: MentorserviceService) {
    this.getMentorProfile();
   }

  ngOnInit(): void {
    this.overviewForm = this.formbuilder.group({
      shortDesc: ['', Validators.required],
      description: ['', Validators.required],
      categories: ['', Validators.required],
      searchTags: ['', Validators.required],
      technology: ['', Validators.required],
      services: ['', Validators.required],
    })
  }

  getMentorProfile() {
    this.mentorService.getMentorProfile().subscribe((data) => {
      console.log("mentor profile data:::" + data)
      this.mentorProfile = data.data;
    },
      (error) => {
      })
  }



}
