import { Component, OnInit, TemplateRef } from '@angular/core';
import { MaSliderOptions } from '../common/components/slider/slider.model';

@Component({
  selector: 'app-rotator',
  templateUrl: './rotator.component.html',
  styleUrls: ['./rotator.component.scss']
})
export class RotatorComponent implements OnInit {

  rotatorOptions: MaSliderOptions = {
    slidesPerView: 3,
    spaceBetween: 40,
    direction: 'vertical'
  };

  items = [
    {
      image: {
        src: '/assets/images/rotator1.jpg',
        alt: 'text alt'
      },
      title: 'Dla dzieci',
      subtitle: 'Menu',
      icon: 'Y<img class="icon" src="/assets/images/svg/letter.svg">'
    },
    {
      image: {
        src: '/assets/images/rotator2.jpg',
        alt: 'text alt'
      },
      title: 'Barbecue',
      subtitle: 'Menu',
      icon: 'ICON'
    },
    {
      image: {
        src: '/assets/images/rotator3.jpg',
        alt: 'text alt'
      },
      title: 'Grycan',
      subtitle: 'Lody',
      icon: 'ICON'
    },
    {
      image: {
        src: '/assets/images/rotator1.jpg',
        alt: 'text alt'
      },
      title: 'Dla dorosłych',
      subtitle: 'Menu',
      icon: 'ICON'
    },
    {
      image: {
        src: '/assets/images/rotator3.jpg',
        alt: 'text alt'
      },
      title: 'Koral',
      subtitle: 'Lody',
      icon: 'ICON'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
