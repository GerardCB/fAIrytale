import { useEffect, useState } from 'react'

const AnimatedLogo = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => setOpacity(1), 2000)
  }, [])

  return (
    <svg
      style={style}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      className={opacity === 1 ? 'animated-logo' : 'appear-up-delay'}
    >
      <path d='M89 70.1l-6.3-7.8c-1.1-1.4-2.9-2.2-4.7-2.2H54c-1.5 0-2.9.6-4 1.5-1.1-1-2.5-1.5-4-1.5H21.9c-1.8 0-3.5.8-4.7 2.3L11 70.1c-2.9.5-5 2.9-5 5.9v2c0 3.3 2.6 6 5.9 6h28.3c.9 4.6 5 8 9.8 8 4.8 0 8.9-3.4 9.8-8h28.3c3.2 0 5.9-2.7 5.9-6v-2c0-3-2.1-5.4-5-5.9zM54 64h24.1c.6 0 1.2.3 1.6.8l4.2 5.2H52v-4c0-1.1.9-2 2-2zm-33.6.8c.4-.5 1-.8 1.6-.8h24c1.1 0 2 .9 2 2v4H16.2l4.2-5.2zM90 78c0 1.1-.8 2-1.9 2H58c-1.1 0-2 .9-2 2 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-1.1-.9-2-2-2H11.9c-1 0-1.9-.9-1.9-2v-2c0-1.1.9-2 2-2h36v1c0 1.1.9 2 2 2s2-.9 2-2v-1h36c1.1 0 2 .9 2 2v2zm-38 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM20 54h20c1.1 0 2-.9 2-2V40c0-4.4 3.6-8 8-8s8 3.6 8 8v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V40C82 22.4 67.6 8 50 8S18 22.4 18 40v12c0 1.1.9 2 2 2zm30-26c-6.6 0-12 5.4-12 12v10h-6V40c0-9.9 8.1-18 18-18s18 8.1 18 18v10h-6V40c0-6.6-5.4-12-12-12zM22 40c0-15.4 12.6-28 28-28s28 12.6 28 28v10h-6V40c0-12.1-9.9-22-22-22s-22 9.9-22 22v10h-6V40z' />
    </svg>
  )
}

export default AnimatedLogo

const style = {
  width: '100px',
  fill: '#eee',
}
