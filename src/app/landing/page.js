import Image from 'next/image'
import { IconCalendarRepeat, IconHeart, IconBookmark } from '@tabler/icons-react'
import OfferCard from '../components/offer-card'
import { redirect } from 'next/navigation'
import Link from 'next/link';

export default function Landing() {

  return (
    <div>
    <div className="flex flex-col h-screen bg-[#D8FCDF] overflow-x-hidden	">
      {/* Navbar */}
      <nav className="p-10 mr-4 flex justify-end h-[10%]">
        <Link href='/auth/login' type="button" className="text-black mr-4 font-semibold hover:text-[#376B52]">Log In</Link>
        <Link href='/auth/register' type="button" className="text-black font-semibold hover:text-[#376B52]">Sign Up</Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-wrap ml-[10vw] justify-center items-center h-[90%]">
        <div className="max-w items-center justify-center flex flex-col">
          <h1 className="text-[8.7vw] font-bold text-[#67AB57]">TechHack</h1>
          <p className="ml-5 font-semibold text-[1.6vw] text-gray-700">Join our cutting-edge hackathons and innovate with us.</p>
          
          <div className='w-[100%]'>
          <Link href='/auth/register' className="mt-10 px-6 p-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none foycus:ring-2 focus:ring-green-500 focus:ring-offset-2 float-right text-[1vw]">
            Start Journey
          </Link>
          </div>
        </div>
        <div className="flex-1 ml-[5em] items-center justify-center flex flex-col min-w-[200px] ">
          <video autoPlay muted loop className="rounded-xl shadow-lg">
            <source src="/videos/hackathon-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
      </main>
      </div>
      {/* Offer Sections */}
      <section className="bg-white transform -skew-y-6 drop-shadow-2xl pb-[10em] mb-[10em]">
        <div className='skew-y-6'>
        <h2 className="font-bold mb-4 text-[3vw] mt-20 text-[#67AB57] p-20 pt-[7%] ">What We Offer</h2>
        <div className="w-screen flex flex-wrap gap-10 justify-center ">
          <OfferCard
            icon="calendar"
            title="Periodical Hackathons"
            description="Join our free hackathons regularly to showcase your skills and learn."
          />
          
          <OfferCard
            icon="companies"
            title="Collaboration with Companies"
            description="Partner with well-known companies to work on real-world challenges."
          />

          <OfferCard
            icon="medal"
            title="Prizes and Recognition"
            description="Win exciting prizes and get recognized for your innovative solutions."
          />


          <OfferCard
            icon="network"
            title="Networking Opportunities"
            description="Connect with like-minded individuals and expand your network."
          />

          <OfferCard
            icon="heart"
            title="Open to All Sectors"
            description="No matter your background, join us if you have the interest and passion."
          />
        </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-5xl mx-auto flex-column">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600">
            TechHack is your gateway to innovative hackathons, collaboration with industry leaders, and endless opportunities for growth. Whether you are a developer, designer, marketer, or enthusiast, our platform welcomes everyone with a passion for learning, innovation, and connecting with like-minded individuals. Join us today and be part of a dynamic community that empowers you to push your boundaries, unlock your potential, and make a lasting impact.
          
          </p>
          <div className='mt-20'>
            <Link href='/auth/register' className="px-6 p-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none foycus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-[1vw]">
              Start Hacking
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4">
        <p className="text-sm text-gray-600">Copyright © 2023 TechHack. All rights reserved.</p>
      </footer>
    </div>
  )
}
