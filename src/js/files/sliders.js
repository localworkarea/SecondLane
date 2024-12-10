/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
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
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});