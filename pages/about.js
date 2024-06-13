import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">포트폴리오</h1>

      <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md mb-4">
        <h1 className="text-lg font-bold">BookSite</h1>
        <Image src="/images/booksite.jpg" width={300} height={300}></Image>
        <Link href="https://book-ra72e6.vercel.app/" className="text-green-800">
          link
        </Link>
      </div>
      <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md mb-4">
        <h1 className="text-lg font-bold">Nextmall</h1>
        <Image src="/images/nextmall.jpg" width={300} height={300}></Image>
        <br />
        <Link
          href="https://nextmall1-nco4tkx7b-ra72e6.vercel.app/"
          className="text-green-800"
        >
          link
        </Link>
      </div>
    </div>
  );
}
