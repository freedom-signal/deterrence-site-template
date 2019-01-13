export default function trackWithPixel(event, type, customParams) {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  fbq(event, type, customParams)
}
