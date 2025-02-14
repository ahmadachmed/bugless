import { Menu } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='border-b border-[#1E2028]'>
        <nav className='flex justify-between items-center px-5 py-3'>
            <div className=''>
                <Image src='/next.svg' alt="logo" width={144} height={30}/>
            </div>
            <div className='p-3 bg-[#1E2028] rounded-md'>
                <Menu/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar