export const addCustomClickEventListener = (eventName: string) => {
  // Set to false if you want to track all events and not just those in shadow DOM
  const trackOnlyShadowDom = true

  const callback = function (event: MouseEvent) {
    if ('composed' in event && typeof event.composedPath === 'function') {
      // Get the path of elements the event climbed through, e.g.
      // [span, div, div, section, body]
      const path = event.composedPath() as (HTMLElement & HTMLAnchorElement & HTMLFormElement)[]

      // Fetch reference to the element that was actually clicked
      const targetElement = path[0]

      // Check if the element is WITHIN the shadow DOM (ignoring the root)
      const shadowFound = path.length
        ? path.filter(function (i) {
            return !targetElement.shadowRoot && !!i.shadowRoot
          }).length > 0
        : false

      // If only shadow DOM events should be tracked and the element is not within one, return
      if (trackOnlyShadowDom && !shadowFound) return // Push to dataLayer

      if (!window.dataLayer) {
        window.dataLayer = []
      }

      window.dataLayer.push({
        event: eventName,
        gtm: {
          element: targetElement,
          elementId: targetElement.id || '',
          elementClasses: targetElement.className || '',
          'elementUrl': targetElement.href || targetElement.action || '',
          'elementURL': targetElement.href || targetElement.action || '',
          elementTarget: targetElement.target || '',
          elementText: targetElement.textContent || '',
          originalEvent: event,
          inShadowDom: shadowFound,
        },
      })
    }
  }

  document.addEventListener('click', callback)
}
