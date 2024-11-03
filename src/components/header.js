import Link from 'next/link'
import React from 'react'

export default function header() {
  return (
    <header className="bg-white border-b py-4">
      <div className='max-w-4xl flex justify-between mx-auto px-6'>
        <div className="flex items-center gap-4">
          <Link href={'/'}>My Links</Link>
          <nav className="flex items-center gap-4 text-slate-500 text-sm">
            <Link href={'/about'}>About</Link>
            <Link href={'/about'}>Price</Link>
            <Link href={'/about'}>Contact</Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-500">
          <Link href={'/login'}>Sign IN</Link>
          <Link href={'/register'}>Create Account</Link>
        </nav>
      </div>
    </header>
  )
}
