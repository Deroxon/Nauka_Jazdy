import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  
  updates: any = [
    {
      title: 'Otwieramy biuro nauki jazdy w Prusicach!',
      shortDescription: 'This is short description of title',
      description: '',
      tags: ['Description', 'short story', 'etc'],
      date: '24/10/2022 | 14:35',
      images: [
        { url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        }
      ],
      mainImage: {
          url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        },
        id:1,
    },
    {
      title: 'Tytuł',
      shortDescription: ' This is short description of title',
      tags: ['Description', 'short story', 'etc'],
      images: [
        { url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        }
      ],
      mainImage: {
          url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        },
        id:2,
    },
  ]
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.updates[0].mainImage.url)
  }

}
