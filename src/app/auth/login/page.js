import React from 'react';
import { IconUser, IconLock } from '@tabler/icons-react';
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { AuthButtonServer } from '../auth-button-server';

export default function AuthPage() {

  return (
    <div className="flex items-center justify-center h-screen bg-[#D8FCDF]">
      <div className="rounded-xl shadow-xl ">
        <div className='bg-[#376B52] w-full p-8 rounded-t-xl flex justify-center items-center'>
          <h2 className="text-3xl font-semibold text-white">Sign Into TechHack</h2>
        </div>
        <div className='bg-white rounded-b-xl p-12'>
          <div className="mb-8 flex items-center p-2 border border-gray-300 rounded-xl">
            <IconUser size={20} className="mr-2" color='#376B52'/>
            <input type="email" placeholder="Email" className="w-full focus:outline-none" />
          </div>
          <div className="mb-8 flex items-center p-2 border border-gray-300 rounded-xl">
            <IconLock size={20} className="mr-2" color='#376B52'/>
            <input type="password" placeholder="Password" className="w-full focus:outline-none" />
          </div>
          <p className="text-gray-600 mt-8">
            Still not have an account? <Link className="underline text-[#16A34A]" href="/auth/register">Sign Up</Link>
          </p>
          <AuthButtonServer />
        </div>
      </div>
    </div>
  );
}
