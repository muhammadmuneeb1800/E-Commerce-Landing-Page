import Image from 'next/image'
import logo from '../public/asset 0.png'
import Link from 'next/link'
import main from '../public/asset 2.png'
import color from '../public/asset 1.png'
import brand1 from '../public/asset 3.png'
import brand2 from '../public/asset 4.png'
import brand3 from '../public/asset 5.png'
import brand4 from '../public/asset 6.png'
import brand5 from '../public/asset 7.png'
import brand6 from '../public/asset 8.png'

export default function Home() {
  return (
    <>
      <nav className="container items-center bg-white text-black w-full uppercase tracking-[0.22px] md:text-[22px] mx-auto mt-10 px-9">
          <div className="mx-auto flex justify-between flex-row items-center">
            <div>
               <Link href="#"><Image src={logo} alt='logo'/></Link>
             </div>
             <ul className="hidden md:flex lg:gap-16 flex-row md:gap-5 font-bold md:text-[15px] lg:text-[18px] justify-end items-center">
                  <li><Link href="#">Catalogue</Link></li>
                  <li><Link href="#">Fashion</Link></li>
                  <li><Link href="#">Favourite</Link></li>
                  <li><Link href="#">LifeStyle</Link></li>
                  <li><Link className="bg-black p-3 rounded-lg text-white" href="#">Sign Up</Link></li>
              </ul>
             <div className="md:hidden">
                <div id="hambargar" className="space-y-1 rotate-180">
                  <div className="w-7 h-1 bg-black"></div>
                  <div className="w-7 h-1 bg-black"></div>
                  <div className="w-7 h-1 bg-black"></div>
                </div>
                <ul id="mobile" className="flex flex-col justify-start gap-5 h-screen absolute top-0 p-10 items-start left-0 bg-purple-400 -translate-x-full">
                  <li><Link href="#">Catalogue</Link></li>
                  <li><Link href="#">Fashion</Link></li>
                  <li><Link href="#">Favourite</Link></li>
                  <li><Link href="#">LifeStyle</Link></li>
                  <li><Link className="bg-black p-3 rounded-lg text-white" href="#">Sign Up</Link></li>
              </ul>
             </div>
          </div>

      </nav>


    {/* Section 2nd */}

      <section className=" mt-24 md:h-[700px] lg:h-[880px] md:pt-24 flex flex-col md:items-center gap-10 md:justify-between md:px-20 px-14 container mx-auto md:flex  md:flex-row bg-slate-200 rounded-[59px] pt-0">
          <div className="flex flex-col items-start text-black mt-44 md:pb-56 ">
            <h1 className="text-5xl lg:text-8xl md:text-6xl md:leading-[135%] font-black">
                <span className="relative after:w-[120%] after:h-full after:-rotate-2 bg-white">LETS</span> <br /> EXPLORE <br /> <span className="relative after:w-[120%] after:h-full after:-rotate-2 bg-yellow-400">UNIQE</span> <br />
            </h1>
            <p className="md:text-2xl mt-6">Live for Influential and Innovative fashion!</p>
            <div className="flex flex-row mt-8 gap-8">
            <Image src={color} height={25} width={120} alt="color"/>
            <Link className="bg-black md:p-5 p-2 rounded-xl text-white" href="#">Shop Now</Link>
            </div>
          </div>
          <div className="">
            <Image src={main}  alt="main-big"/>
          </div>
      </section>


      {/* Brands Section */}

      <section className="flex flex-col justify-center items-center gap-[120px] my-16 bg-slate-200 py-[61px] md:flex-row">
          <div className="w-[120px]"><Image src={brand1} alt="" /></div>
          <div className="w-[160px]"><Image src={brand2} alt="" /></div>
          <div className="w-[180px]"><Image src={brand3} alt="" /></div>
          <div className="w-[150px]"><Image src={brand4} alt="" /></div>
          <div className="w-[130px]"><Image src={brand5} alt="" /></div>
          <div className="w-[170px]"><Image src={brand6} alt="" /></div>
      </section>
    </>
  )
}
