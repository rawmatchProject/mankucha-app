'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

export default function MainFooter({}: Props) {

  const pathName = usePathname()

  return (
    <>
      { pathName !== "/login" && <footer className='relative p-2 bg-secondary'>
      <div>
        <section></section>
        <section>
          <article>
            Follow Our Social
          </article>
          <article>
            
          </article>
        </section>
      </div>
      <div className="text-sm text-center">
        <p>Copyright@2023-2024 - Mankucha</p>
      </div>
    </footer>}
    </>
    
  )
}