import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y, EffectCube
} from 'swiper/core';

// EffectCube, EffectFlip, EffectCoverflow, EffectFade
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swiper-demo';
  onSwiper() {
    // console.log('on init');
  }
  onSlideChange(swiper) {
    console.log(swiper.activeIndex);
    console.log('slide change');
  }
}
