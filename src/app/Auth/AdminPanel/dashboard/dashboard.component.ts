import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from "firebase/auth";
import { Image } from 'src/app/model/image';
import { MainImage } from 'src/app/model/main-image';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title:string =''
  date:string =''
  mainImage: MainImage = {
    alt : '',
    url : '',
    title:'',
  }
  shortDescription:string = ''
  tag: string =''
  tags: String[]= []
  displayedTags = ''
  description: string =''
  images: Object[] = []
  image: Image = {
    title: '',
    alt:'',
    url: ''
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.auth.checkIfUserIsLoggedIn()
  }

  addTag() {
    if(this.tag) {
      this.tags.push(this.tag)
      this.tag = ''
      console.log(this.tags)
      this.displayedTags = this.tags.join(', ')
    }
    else {
      alert('Pole "Tag" nie może być puste ')
    }
  }
  addImage() {
    if(this.image.url, this.image.alt, this.image.title) {
      this.images.push( {
        title: this.image.title,
        alt: this.image.alt,
        url: this.image.url,
      })
      this.image.url = ''
      this.image.alt = ''
      this.image.title = ''
    }
  }

  logout() {
    this.auth.logout()
  }

  hoverImages() {

  }


}
