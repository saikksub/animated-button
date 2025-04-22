import { createApp } from 'vue'
import './style.css'
import './bubbly.css'
import App from './App.vue'

const app = createApp(App)


app.directive('bubble', {
  mounted: (el) => {
    el.classList.add('bubbly-button')

    // Define the animation function
    const animateButton = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Reset animation
      target.classList.remove('animate');
      // Add animate class
      target.classList.add('animate');
      // Remove animate class after animation duration (700ms)
      setTimeout(() => {
        target.classList.remove('animate');
      }, 700);
    };

    // Add the click event listener to the element
    el.addEventListener('click', animateButton, false);
  }
})

app.mount('#app')
