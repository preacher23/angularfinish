import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent implements OnInit {
  profiles = [
    { id: 1, name: 'A', description: 'A brief description', image: 'assets/thomas shelby 5.jpg' },
    { id: 2, name: 'B', description: 'A brief description', image: 'assets/thomas shelby 4.jpg' },
    // Add more profiles
  ];

  ngOnInit(): void {}

  onSwipeRight(profileId: number) {
    this.profiles = this.profiles.filter(p => p.id !== profileId);
    alert(`Profile ${profileId} approved!`);
  }

  onSwipeLeft(profileId: number) {
    this.profiles = this.profiles.filter(p => p.id !== profileId);
    alert(`Profile ${profileId} rejected!`);
  }
}