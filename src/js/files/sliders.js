/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import {Navigation, Autoplay, EffectFade,FreeMode, Scrollbar } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.clients__slider')) { 
		new Swiper('.clients__slider', {
			modules: [Autoplay, EffectFade],
			// modules: [ EffectFade],
			// modules: [ EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			speed: 500,
			// autoHeight: true,
			// centeredSlides: false,
			// longSwipes: true,/a
			// simulateTouch: true,
			grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loopAddBlankSlides: true,
			// loopAddBlankSlides: true,
			// loopAdditionalSlides: 5,
			//preloadImages: false,
			//lazy: true,
			
			loop: true,
		

			// freeMode: {
			// 	enabled: true,
			// 	// momentum: false,
			// 	momentumBounce: false,
			// 	minimumVelocity: 0.05,
			// },
			// nested: true,

			// Ефекти
			effect: 'fade',
			autoplay: {
				crossFade: true,
				// delay: 2000,
				// disableOnInteraction: false,
			},

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			// Брейкпоінти
			breakpoints: {
				320: {
					autoplay: {
						delay: 2500,
						pauseOnMouseEnter: true,
						disableOnInteraction: true,
					},
				},
				768: {
					autoplay: {
						delay: 3500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
						// waitForTransition: false,
					},
				}
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.blog-hero__nav')) { 
		new Swiper('.blog-hero__nav', {
			modules: [FreeMode, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			grabCursor: true,
			freeMode: {
				enabled: true,
				momentum: false,
			},

			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },

			// breakpoints: {
			// 	320: {
			// 		spaceBetween: 40,
			// 	},
			// 	768: {
			// 		spaceBetween: 60,
			// 	}
			// },
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.article__slider')) { 
		new Swiper('.article__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			speed: 500,
			autoHeight: true,
			loop: true,

			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

		});
	}
}


window.addEventListener("load", function (e) {
	initSliders();
});