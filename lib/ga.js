// log the pageview with their URL
export const googleAnalyticsPageView = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

// log specific events happening.
export const googleAnalyticsEvent = ({ action, params }) => {
  window.gtag('event', action, params)
}