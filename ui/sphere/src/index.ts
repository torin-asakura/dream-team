import dynamic from 'next/dynamic'

const Sphere = dynamic(() => import('./sphere.component'), { ssr: false })

export { Sphere }
