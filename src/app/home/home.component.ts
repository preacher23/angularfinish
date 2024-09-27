import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfilesService } from '../profile-details/profile-service';
import { IndexedDBService } from '../indexdb-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  profiles = [
    { id: 1, name: 'A', description: 'A brief description', image: 'assets/thomas shelby 5.jpg' },
    { id: 2, name: 'B', description: 'A brief description', image: 'assets/thomas shelby 4.jpg' },
    { id: 3, name: 'x', description: 'A brief description', image: 'assets/thomas shelby 3.jpg' },
    { id: 4, name: 'y', description: 'A brief description', image: 'assets/thomas shelby 2.jpg' },
    { id: 5, name: 'z', description: 'A brief description', image: 'assets/thomas shelby 1.jpg' },
  ];

  constructor(private router: Router,private toastr: ToastrService,private dbService: IndexedDBService) {}

  async ngOnInit(): Promise<void> {
    this.profiles = await this.dbService.getProfiles();
  }


  async onYes(profileId: number) {
    this.profiles = this.profiles.filter(p => p.id !== profileId);
    this.toastr.success('Profile removed successfully'); 
    this.profiles = await this.dbService.getProfiles();
  }

 async onNo(profileId: number) {
    this.profiles = this.profiles.filter(p => p.id !== profileId);
    this.toastr.info('Profile skipped');
    this.profiles =await this.dbService.getProfiles();
  }

  goToGesture() {
    this.router.navigate(['/gesture']);
  }

  viewProfile(profileId: number) {
    this.router.navigate(['/profile-details', profileId]);
  }
}
