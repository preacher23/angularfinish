import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile: any;
  profiles = [
    { id: 1, name: 'A', description: 'A brief description', image:[ 'assets/thomas shelby 5.jpg','assets/thomas_shelby_4.jpg'] },
    { id: 2, name: 'B', description: 'A brief description', image: ['assets/thomas shelby 4.jpg','assets/thomas_shelby_4.jpg'] },
    // Add more profiles
  ];

  constructor(private route: ActivatedRoute,private location: Location) {}

  ngOnInit(): void {
    const profileId = this.route.snapshot.params['id'];
    this.profile = this.profiles.find(p => p.id == profileId);
  }
  currentImageIndex = 0;

prevImage() {
  this.currentImageIndex = (this.currentImageIndex - 1 + this.profile.images.length) % this.profile.images.length;
}

nextImage() {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.profile.images.length;
}


goBack() {
  this.location.back();
}


}
