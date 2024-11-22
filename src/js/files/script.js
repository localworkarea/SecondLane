// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import Lenis from 'lenis'
import SplitType from 'split-type'


 // == SPLIT TYPE =========================================================
 const splitTextLines = document.querySelectorAll('.split-lines');
 const splitTextWords = document.querySelectorAll('.split-words');
 const splitTextChars = document.querySelectorAll('.split-chars');
 const splitTextCharsSpan = document.querySelectorAll('.split-chars-span');
 const splitTextBoth = document.querySelectorAll('.split-both');
 const splitSetSpan = document.querySelectorAll('.split-words.set-span');
 
 function initSplitType() {
   // Если существуют элементы с классом .split-lines
   if (splitTextLines.length > 0) {
     splitTextLines.forEach(element => {
       new SplitType(element, { types: 'lines' });
     });
   }
 
   // Если существуют элементы с классом .split-words
   if (splitTextWords.length > 0) {
     splitTextWords.forEach(element => {
       new SplitType(element, { types: 'words' });
       // Проставляем индексы для всех слов
       const words = element.querySelectorAll('.word');
       words.forEach((word, index) => {
         word.style.setProperty('--index', index);
       });
     });
   }
 
   // Если существуют элементы с классом .split-chars
   if (splitTextChars.length > 0) {
     splitTextChars.forEach(element => {
       new SplitType(element, { types: 'chars' });
       const chars = element.querySelectorAll('.char');
       chars.forEach((char, index) => {
         char.style.setProperty('--index', index);
       });
     });
   }


   if (splitTextCharsSpan.length > 0) {
    splitTextCharsSpan.forEach(elementSpan => {
        const splitInstance = new SplitType(elementSpan, { types: 'chars' });
        splitInstance.chars.forEach((char, index) => {
            const textContent = char.textContent.trim(); 
            char.innerHTML = `<span class="char-span">${textContent}</span>`;
            // char.style.setProperty('--index', index); // Устанавливаем CSS-переменную --index
        });
    });
  }

   // Если существуют элементы с классом .split-both
   if (splitTextBoth.length > 0) {
     splitTextBoth.forEach(element => {
       new SplitType(element, { types: 'lines, words' });
       // Проставляем индексы для всех слов
       const words = element.querySelectorAll('.word');
       words.forEach((word, index) => {
         word.style.setProperty('--index', index);
       });
     });
   }
   // Добавляем <span> для каждого слова внутри .split-words.set-span
   if (splitSetSpan.length > 0) {
     splitSetSpan.forEach(splitSetSpan => {
       const words = splitSetSpan.querySelectorAll('.word');
       
       words.forEach(word => {
         const text = word.textContent.trim();
         word.innerHTML = `<span class="word-span">${text}</span>`;
       });
     });
   }
 }
 
 initSplitType();
 
 let lastWidth = window.innerWidth;
 const resizeObserver = new ResizeObserver(entries => {
     requestAnimationFrame(() => {
         entries.forEach(entry => {
             const currentWidth = entry.contentRect.width;
             if (currentWidth !== lastWidth) {
                 initSplitType();
                 lastWidth = currentWidth;
             }
         });
     });
 });
 // Наблюдаем за изменениями в элементе body
 resizeObserver.observe(document.body);
 
 // =======================================================================


// === ПЛАВНАЯ ПРОКРУТКА ЧЕРЕЗ LENIS =============================
const lenis = new Lenis({
  smooth: true,          // Включает плавный скролл
  smoothTouch: true,     // Включает плавный скролл на мобильных устройствах
  lerp: 0.05,             // Определяет инерцию (чем ближе к 1, тем медленнее скролл)
  // direction: 'vertical', // Задаёт направление скролла: 'vertical' или 'horizontal'
  mouseMultiplier: 3,    // Чувствительность прокрутки мыши (увеличивайте, чтобы сделать скролл быстрее)
})
  
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)



window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


});