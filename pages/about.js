import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">𝙋𝙤𝙧𝙩𝙛𝙤𝙞𝙡𝙤</h2>
      <Image src="/images/pot.jpg" width={400} height={300}></Image>
      <br />
      <Link
        href="https://web-ten-puce-34.vercel.app/"
        className="text-green-800"
      >
        𝙇𝙞𝙣𝙠
      </Link>
      <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md mb-4">
        <h2 className="text-lg font-bold">𝘽𝙤𝙤𝙠𝙨𝙞𝙩𝙚</h2>
        <Image src="/images/booksite.jpg" width={300} height={300}></Image>
        <br />
        <Link href="https://book-ra72e6.vercel.app/" className="text-green-800">
          𝙇𝙞𝙣𝙠
        </Link>
      </div>
      <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md mb-4">
        <h2 className="text-lg font-bold">𝙉𝙚𝙭𝙩𝙢𝙖𝙡𝙡</h2>
        <Image src="/images/nextmall.jpg" width={300} height={300}></Image>
        <br />
        <Link
          href="https://nextmall1-nco4tkx7b-ra72e6.vercel.app/"
          className="text-green-800"
        >
          𝙇𝙞𝙣𝙠
        </Link>
      </div>
    </div>
  );
}
