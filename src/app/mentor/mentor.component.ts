import { Component, OnInit } from '@angular/core';
import {MentorserviceService} from "../mentor/mentorservice.service";

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  constructor(private mentorService:MentorserviceService) { }


  ngOnInit(): void {
     this.mentorService.getMentorProfile().subscribe((data)=>
     {
       console.log("mentor profile data:::"+data)
       this.validateMentorProfile(data);
     },
     (error)=>{

     })

  }

  validateMentorProfile(profile:any)
  {

  }
}
