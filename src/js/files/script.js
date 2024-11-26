// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import Lenis from 'lenis'
// import SplitType from 'split-type'
// import { DotLottie } from '@lottiefiles/dotlottie-web';



 // == SPLIT TYPE =========================================================
//  const splitTextLines = document.querySelectorAll('.split-lines');
//  const splitTextWords = document.querySelectorAll('.split-words');
//  const splitTextChars = document.querySelectorAll('.split-chars');
//  const splitTextCharsSpan = document.querySelectorAll('.split-chars-span');
//  const splitTextBoth = document.querySelectorAll('.split-both');
//  const splitSetSpan = document.querySelectorAll('.split-words.set-span');
 
//  function initSplitType() {
//    // Если существуют элементы с классом .split-lines
//    if (splitTextLines.length > 0) {
//      splitTextLines.forEach(element => {
//        new SplitType(element, { types: 'lines' });
//      });
//    }
 
//    // Если существуют элементы с классом .split-words
//    if (splitTextWords.length > 0) {
//      splitTextWords.forEach(element => {
//        new SplitType(element, { types: 'words' });
//        // Проставляем индексы для всех слов
//        const words = element.querySelectorAll('.word');
//        words.forEach((word, index) => {
//          word.style.setProperty('--index', index);
//        });
//      });
//    }
 
//    // Если существуют элементы с классом .split-chars
//    if (splitTextChars.length > 0) {
//      splitTextChars.forEach(element => {
//        new SplitType(element, { types: 'chars' });
//        const chars = element.querySelectorAll('.char');
//        chars.forEach((char, index) => {
//          char.style.setProperty('--index', index);
//        });
//      });
//    }


//    if (splitTextCharsSpan.length > 0) {
//     splitTextCharsSpan.forEach(elementSpan => {
//         const splitInstance = new SplitType(elementSpan, { types: 'chars' });
//         splitInstance.chars.forEach((char, index) => {
//             const textContent = char.textContent.trim(); 
//             char.innerHTML = `<span class="char-span">${textContent}</span>`;
//             // char.style.setProperty('--index', index); // Устанавливаем CSS-переменную --index
//         });
//     });
//   }

//    // Если существуют элементы с классом .split-both
//    if (splitTextBoth.length > 0) {
//      splitTextBoth.forEach(element => {
//        new SplitType(element, { types: 'lines, words' });
//        // Проставляем индексы для всех слов
//        const words = element.querySelectorAll('.word');
//        words.forEach((word, index) => {
//          word.style.setProperty('--index', index);
//        });
//      });
//    }
//    // Добавляем <span> для каждого слова внутри .split-words.set-span
//    if (splitSetSpan.length > 0) {
//      splitSetSpan.forEach(splitSetSpan => {
//        const words = splitSetSpan.querySelectorAll('.word');
       
//        words.forEach(word => {
//          const text = word.textContent.trim();
//          word.innerHTML = `<span class="word-span">${text}</span>`;
//        });
//      });
//    }
//  }
 
//  initSplitType();
 
//  let lastWidth = window.innerWidth;
//  const resizeObserver = new ResizeObserver(entries => {
//      requestAnimationFrame(() => {
//          entries.forEach(entry => {
//              const currentWidth = entry.contentRect.width;
//              if (currentWidth !== lastWidth) {
//                  initSplitType();
//                  lastWidth = currentWidth;
//              }
//          });
//      });
//  });
//  // Наблюдаем за изменениями в элементе body
//  resizeObserver.observe(document.body);
 
 // =======================================================================


// === ПЛАВНАЯ ПРОКРУТКА ЧЕРЕЗ LENIS =============================
const lenis = new Lenis({
  smooth: true,          // Включает плавный скролл
  smoothTouch: true,     // Включает плавный скролл на мобильных устройствах
  lerp: 0.1,             // Определяет инерцию (чем ближе к 1, тем медленнее скролл)
  // direction: 'vertical', // Задаёт направление скролла: 'vertical' или 'horizontal'
  mouseMultiplier: 3,    // Чувствительность прокрутки мыши (увеличивайте, чтобы сделать скролл быстрее)
})
  
// lenis.on('scroll', ScrollTrigger.update)
// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })
// gsap.ticker.lagSmoothing(0)

// // Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



window.addEventListener('DOMContentLoaded', () => {

  // gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // == отслежинвание рисайза ширины ============================
  let lastWidth = window.innerWidth;
  const resizeObserver = new ResizeObserver(entries => {
      requestAnimationFrame(() => {
          entries.forEach(entry => {
              const currentWidth = entry.contentRect.width;
              if (currentWidth !== lastWidth) {
                 detailsUpdate();
                  lastWidth = currentWidth;
              }
          });
      });
  });
  resizeObserver.observe(document.body);
  // ===========================================================

  // const lottieItems = document.querySelectorAll('.hero__lottie');
  // if (lottieItems.length > 0) {
  //   lottieItems.forEach(canvas => {
  //     const src = canvas.dataset.src;
    
  //     // Создаем экземпляр DotLottie
  //     const lottieInstance = new DotLottie({
  //       autoplay: isMobile.any(), // Автозапуск только на мобильных
  //       loop: true, // Цикличность только на мобильных
  //       canvas: canvas,
  //       src: src,
  //     });
    
  //     // Если не мобильное устройство, добавляем логику запуска при ховере
  //     if (!isMobile.any()) {
  //       const parent = canvas.closest('.list-access__item'); // Родительский элемент
    
  //       if (parent) {
  //         // Запускаем анимацию при наведении
  //         parent.addEventListener('mouseenter', () => {
  //           lottieInstance.play();
  //         });
    
  //         // Останавливаем анимацию при убирании курсора
  //         parent.addEventListener('mouseleave', () => {
  //           lottieInstance.stop();
  //         });
  //       } else {
  //         console.warn(`Родительский элемент для canvas с id: ${canvas.id} не найден.`);
  //       }
  //     }
  //   });
  // }
    
  const liquiditySection = document.querySelector('.liquidity');

  const liquidityDetails = document.querySelector('.liquidity__details');
  const liquidityList = document.querySelector('.liquidity__list');
  const liquidityItems = document.querySelectorAll('.liquidity__item');
  const liquidityTxts = document.querySelectorAll('.liquidity__txt');
  const liquidityTxtWrps = document.querySelectorAll('.liquidity__txt-wr');

  const liquidityElWrps = document.querySelectorAll('.liquidity__el-wr');


  // let mm = gsap.matchMedia();
  // mm.add(
  //   {
  //     isDesktop: `(min-width: 51.311em)`, // больше 820.98рх
  //     isTablet: `(min-width: 43.812em) and (max-width: 63.999em)`, // от 701px до 1023px
  //     isMobile: `(max-width: 43.811em)` // меньше или равно 700px
  //   },
  //   (context) => {
  //     let { isDesktop, isTablet, isMobile } = context.conditions;
  
  //     if (isDesktop) {

  //       if (liquiditySection) {

  //       }

  //     }
  
  //     if (isTablet) {

  //     }
  
  //     if (isMobile) {

  //     }
  //   }
  // );



  // == DETAILS SPOILERS =======================================================
  const details = document.querySelector('.liquidity__details');
  const subtitles = document.querySelectorAll('.liquidity__subtitle');
  function detailsUpdate() {
    if (details) {
      const totalItems = subtitles.length;
      const totalHeight = Array.from(subtitles).reduce((sum, subtitle) => sum + subtitle.offsetHeight, 0);

      details.style.setProperty('--total-items', totalItems);
      details.style.setProperty('--total-height', `${totalHeight}px`);

      subtitles.forEach((subtitle, index) => {
        const reversedIndex = totalItems - index - 1; // Нумерация снизу вверх
        const directIndex = index; // Нумерация сверху вниз
        const height = subtitle.offsetHeight;
        subtitle.style.setProperty('--index', reversedIndex);
        subtitle.style.setProperty('--index-rev', directIndex);
        subtitle.style.setProperty('--height', `${height}px`);
      });


      const firstSubtitle = subtitles[0];

      if (firstSubtitle) {
        const firstSubtitleHeight = firstSubtitle.offsetHeight;
        const virtualBottom = totalHeight ;

        window.addEventListener('scroll', () => {
          const boundingRect = firstSubtitle.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // Рассчитываем виртуальный низ относительно вьюпорта
          const virtualBottomPosition = boundingRect.top + virtualBottom;
        
          if (virtualBottomPosition <= viewportHeight) {
            details.classList.add('_viewport');
          } else {
            details.classList.remove('_viewport');
          }
        });
      }
    }
  }
  detailsUpdate();
  // ==========================================================================

 




  // ACCESS SECTION =============================================================
  const mediaQuery = window.matchMedia("(min-width: 51.311em)");
  
  const handleMediaQueryChange = () => {
    const accessItems = document.querySelectorAll('.list-access__item');

    if (accessItems.length > 0) {
      const setBodyHeight = (item, expand = false) => {
        const body = item.querySelector('.list-access__body');
        const wrapper = item.querySelector('.list-access__wrapper');
        const wrapperHeight = wrapper.scrollHeight;
        body.style.height = expand ? `${wrapperHeight}px` : '0';
      };
    
      if (mediaQuery.matches) {
        // Убираем высоту для всех элементов перед активацией логики
        accessItems.forEach(item => {
          const body = item.querySelector('.list-access__body');
          body.style.height = '0';
        });
      
        if (isMobile.any()) {
          accessItems.forEach(item => setBodyHeight(item, true));
        } else {
          accessItems.forEach(item => {
            item.addEventListener('mouseenter', () => setBodyHeight(item, true));
            item.addEventListener('mouseleave', () => setBodyHeight(item, false));
          });
        }
      } else {
        accessItems.forEach(item => {
          const body = item.querySelector('.list-access__body');
          body.style.height = '';
        
          // Удаляем слушатели событий
          // const newItem = item.cloneNode(true);
          // item.parentNode.replaceChild(newItem, item);
        });
      }
    }
  
  };
  
  // Изначально выполняем проверку
  handleMediaQueryChange();
  
  // Слушаем изменения размеров экрана
  mediaQuery.addEventListener('change', handleMediaQueryChange);
  // ===========================================================================
  


  
  // === OPPORTUNITY SECTION =================================================================
  const mediaQuery2 = window.matchMedia("(max-width: 43.811em)");
    
  const updateProjectCells = () => {
    if (mediaQuery2.matches) {
      const headerCategories = document.querySelectorAll(".list-header__category");
      const projectItems = document.querySelectorAll(".projects-list__item");
    
      projectItems.forEach((item) => {
        const cells = item.querySelectorAll(".projects-list__cell");
      
        cells.forEach((cell, index) => {
          if (!cell.querySelector(".projects-list__category")) {
            const headerClone = headerCategories[index].cloneNode(true);
            headerClone.classList.remove("list-header__category"); // Удаляем оригинальный класс
            headerClone.classList.add("projects-list__category"); // Добавляем новый класс
            // Вставляем в начало ячейки
            cell.insertBefore(headerClone, cell.firstChild);
          }
        });
      });
    } else {
      // Убираем добавленные заголовки, если ширина больше 43.811em
      const addedHeaders = document.querySelectorAll(".projects-list__category");
      addedHeaders.forEach((header) => header.remove());
    }
  };
  
  updateProjectCells();
  
  mediaQuery2.addEventListener("change", updateProjectCells);
  // ================================================================================================

});






  // CLONE TIKERS ==============================================================
  const tikers = document.querySelectorAll(".ticker-wrap");

  tikers.forEach((tiker) => {
    const originalLine = tiker.querySelector(".ticker");
  
    if (originalLine) {
      // скорость по умолчанию
      const speed = originalLine.dataset.tickerSpeed || 50; 

      originalLine.style.animation = `scroll ${speed}s linear infinite`;
  
      const clonedLine = originalLine.cloneNode(true);
      clonedLine.classList.add("clone-line");
  
      tiker.appendChild(clonedLine);
    }
  });


  
  function initSliders() {
    if (document.querySelector('.clients__slider')) { 
      new Swiper('.clients__slider', {
        // modules: [Autoplay, EffectFade],
        // modules: [ EffectFade],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        speed: 300,
        // centeredSlides: false,
        // longSwipes: true,/a
        // simulateTouch: true,
        // grabCursor: true,
  
        //touchRatio: 0,
        //simulateTouch: false,
        // loopAddBlankSlides: true,
        // loopAddBlankSlides: true,
        // loopAdditionalSlides: 5,
        //preloadImages: false,
        //lazy: true,
        
        loop: true,
        autoplay: {
          delay: 2500,
          // disableOnInteraction: false,
          // pauseOnMouseEnter: true,
          // waitForTransition: false,
        },
  
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
        /*
        // Брейкпоінти
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1268: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        */
        // Події
        on: {
  
        }
      });
    }
  }


  window.addEventListener("load", function (e) {
    initSliders();
  });