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
  lerp: 0.07,             // Определяет инерцию (чем ближе к 1, тем медленнее скролл)
  // direction: 'vertical', // Задаёт направление скролла: 'vertical' или 'horizontal'
  mouseMultiplier: 5,    // Чувствительность прокрутки мыши (увеличивайте, чтобы сделать скролл быстрее)
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
            
                
                  lastWidth = currentWidth;
              }
          });
      });
  });
  resizeObserver.observe(document.body);
  // ===========================================================

  // const lottieItems = document.querySelectorAll('.hero__lottie');
  // const lottieEl = document.querySelectorAll('.lottie-el');
  // if (lottieItems.length > 0 || lottieEl.length > 0) {
  //   lottieItems.forEach(canvas => {
  //     const src = canvas.dataset.src;
    
  //     const lottieInstance = new DotLottie({
  //       autoplay: isMobile.any(),
  //       loop: false,
  //       canvas: canvas,
  //       src: src,
  //     });
    
  //     if (!isMobile.any()) {
  //       const parent = canvas.closest('.list-access__item'); 
    
  //       if (parent) {
  //         parent.addEventListener('mouseenter', () => {
  //           lottieInstance.play();
  //         });
  //         parent.addEventListener('mouseleave', () => {
  //           lottieInstance.stop();
  //         });
  //       }
  //     }
  //   });

  //   lottieEl.forEach(canvas => {
  //     const src = canvas.dataset.src;
    
  //     const lottieInstance = new DotLottie({
  //       // autoplay: isMobile.any(),
  //       autoplay: true,
  //       loop: false,
  //       canvas: canvas,
  //       src: src,
  //     });
    
  //     // if (!isMobile.any()) {
  //     //   const parent = canvas.closest('.list-access__item'); 
    
  //     //   if (parent) {
  //     //     parent.addEventListener('mouseenter', () => {
  //     //       lottieInstance.play();
  //     //     });
  //     //     parent.addEventListener('mouseleave', () => {
  //     //       lottieInstance.stop();
  //     //     });
  //     //   }
  //     // }
  //   });
  // }

  const figureSvg = document.querySelectorAll('.figure-svg path');
  if (figureSvg.length > 0) {
    figureSvg.forEach((path) => {
      const length = path.getTotalLength();
      path.style.setProperty('--dasharray', length);
      path.style.setProperty('--dashoffset', length);
    });
  }
    




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

  // const opportunitiesWrapper = document.querySelector('.opportunities__wrapper');
  // const projectLists = opportunitiesWrapper.querySelectorAll('.projects-list');
  
  // projectLists.forEach((list) => {
  //   const projectItems = list.querySelectorAll('.projects-list__item');
  //   const speedCount = parseInt(list.dataset.speedCount, 10) || 2000; 
  //   let currentIndex = 0;
  
  //   const animateItems = () => {
  //     projectItems.forEach((item) => item.classList.remove('_anim'));
  //     projectItems[currentIndex].classList.add('_anim');
  //     // Увеличиваем индекс или сбрасываем его до 0, если достигнут конец списка
  //     currentIndex = (currentIndex + 1) % projectItems.length;
  //     // Рекурсивный вызов через заданный интервал
  //     setTimeout(animateItems, speedCount);
  //   };
  //   animateItems();
  // });


  // const opportunitiesWrapper = document.querySelector('.opportunities__wrapper');
  // const projectLists = opportunitiesWrapper.querySelectorAll('.projects-list');
  
  // projectLists.forEach((list, listIndex) => {
  //   const projectItems = list.querySelectorAll('.projects-list__item');
  //   const speedCount = parseInt(list.dataset.speedCount, 10) || 2000;
  //   let currentIndex = 0;
  //   const maxZIndex = projectItems.length + 1; // Наивысший z-index
  
  //   const animateItems = () => {
  //     // Удаляем класс '_anim' у всех элементов
  //     projectItems.forEach((item) => item.classList.remove('_anim'));
  
  //     // Устанавливаем z-index только для текущего элемента
  //     projectItems[currentIndex].style.zIndex = maxZIndex; // Наивысший z-index
  //     projectItems[currentIndex].classList.add('_anim');
  
  //     // Возвращаем z-index предыдущего элемента к начальному значению
  //     const previousIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
  //     projectItems[previousIndex].style.zIndex = ''; // Сбрасываем z-index
  
  //     // Увеличиваем индекс или сбрасываем его до 0
  //     currentIndex = (currentIndex + 1) % projectItems.length;
  
  //     // Запускаем анимацию с интервалом
  //     setTimeout(animateItems, speedCount);
  //   };
  
  //   // Задержка начала анимации для каждого списка
  //   setTimeout(animateItems, listIndex * 100);
  // });
  

  const opportunitiesWrapper = document.querySelector('.opportunities__wrapper');
  
  if (opportunitiesWrapper) {
  const projectLists = opportunitiesWrapper.querySelectorAll('.projects-list');
  projectLists.forEach((list, listIndex) => {
    const projectItems = list.querySelectorAll('.projects-list__item');
    const speedCount = parseInt(list.dataset.speedCount, 10) || 2000;
    let currentIndex = 0;
    const maxZIndex = projectItems.length + 1; // Наивысший z-index
  
    const animateItems = () => {
      // Удаляем класс '_anim' у всех элементов
      projectItems.forEach((item) => item.classList.remove('_anim'));
  
      // Устанавливаем z-index только для текущего элемента
      projectItems[currentIndex].style.zIndex = maxZIndex; // Наивысший z-index
      projectItems[currentIndex].classList.add('_anim');
  
      // Возвращаем z-index предыдущего элемента к начальному значению
      const previousIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
      projectItems[previousIndex].style.zIndex = ''; // Сбрасываем z-index
  
      // Увеличиваем индекс или сбрасываем его до 0
      currentIndex = (currentIndex + 1) % projectItems.length;
    };
  
    // Задержка перед запуском цикла анимации
    setTimeout(() => {
      animateItems(); // Немедленный запуск для синхронизации
      setInterval(animateItems, speedCount);
    }, listIndex * 100);
  });
  }


  // const navLinks = document.querySelectorAll('.nav-blog__link');
  // if (navLinks.length > 0) {
  //   navLinks.forEach(link => {
  //     link.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       navLinks.forEach(item => item.classList.remove('_active'));
  //       link.classList.add('_active');
  //     });
  //   });
  // }



});




  // const tickers = document.querySelectorAll("[data-ticker]");
  // if (tickers.length > 0) {
  //   tickers.forEach(ticker => {
  //     // Получаем скорость и направление из атрибутов data-ticker-speed и data-ticker-dir
  //     const speed = ticker.getAttribute("data-ticker-speed") || 80;
  //     const direction = ticker.getAttribute("data-ticker-dir") || "rtl";
  
  //     // Берем первый дочерний элемент тикера
  //     const firstChild = ticker.firstElementChild;
  //     if (firstChild) {
  //       // Клонируем первый элемент и добавляем его в конец родительского элемента
  //       const clone = firstChild.cloneNode(true);
  //       ticker.appendChild(clone);
  
  //       // Устанавливаем анимацию для всех дочерних элементов тикера
  //       Array.from(ticker.children).forEach(child => {
  //         const animationName = direction === "rtl" ? "scroll" : "scroll-rev";
  //         child.style.animation = `${animationName} ${speed}s linear infinite`;
  //       });
  //     }
  //   });
  // }

  const tickers = document.querySelectorAll("[data-ticker]");
if (tickers.length > 0) {
  tickers.forEach(ticker => {
    // Получаем скорость и направление из атрибутов data-ticker-speed и data-ticker-dir
    const speed = ticker.getAttribute("data-ticker-speed") || 80;
    const direction = ticker.getAttribute("data-ticker-dir") || "rtl";

    // Берем первый дочерний элемент тикера
    const firstChild = ticker.firstElementChild;
    if (firstChild) {
      // Клонируем первый элемент
      const clone = firstChild.cloneNode(true);

      // Предзагрузка всех изображений в клонированном элементе
      const images = clone.querySelectorAll("img");
      const promises = Array.from(images).map(img => {
        return new Promise(resolve => {
          const preloader = new Image();
          preloader.src = img.src;
          preloader.onload = resolve;
          preloader.onerror = resolve; // Разрешаем, даже если возникла ошибка загрузки
        });
      });

      // После предзагрузки изображений добавляем клонированный элемент и запускаем анимацию
      Promise.all(promises).then(() => {
        ticker.appendChild(clone);

        // Устанавливаем анимацию для всех дочерних элементов тикера
        Array.from(ticker.children).forEach(child => {
          const animationName = direction === "rtl" ? "scroll" : "scroll-rev";
          child.style.animation = `${animationName} ${speed}s linear infinite`;
        });
      });
    }
  });
}

  