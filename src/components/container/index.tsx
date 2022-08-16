import React from 'react'

interface Props {
  children: React.ReactNode
  bgColor?: string
  className?: string
}

const Container = ({ children, bgColor = '', className = '' }: Props) => {
  return (
    <section className={bgColor}>
      <div className={`mx-auto my-0 w-[90%] xl:w-[1200px] ${className}`}>
        {children}
      </div>
    </section>
  )
}

export default Container
