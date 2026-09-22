import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      offset: 0,
      duration: 800,
      once: true,
      disable: () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })

    if (typeof window !== 'undefined') {
      const observer = new MutationObserver(() => {
        AOS.refresh()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    }
  })
})
