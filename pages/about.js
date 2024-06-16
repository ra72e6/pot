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
      <h2 className="text-lg font-bold">𝘽𝙤𝙤𝙠𝙨𝙞𝙩𝙚</h2>
      <Image src="/images/booksite.jpg" width={400} height={300}></Image>
      <br />
      <Link href="https://book-ra72e6.vercel.app/" className="text-green-800">
        𝙇𝙞𝙣𝙠
      </Link>

      <h2 className="text-lg font-bold">𝙉𝙚𝙭𝙩𝙢𝙖𝙡𝙡</h2>
      <Image src="/images/nextmall.jpg" width={400} height={300}></Image>
      <br />
      <Link
        href="https://nextmall1-nco4tkx7b-ra72e6.vercel.app/"
        className="text-green-800"
      >
        𝙇𝙞𝙣𝙠
      </Link>
      <h2 className="text-lg font-bold">𝙧𝙚𝙖𝙘𝙩</h2>
      <Image src="/images/react.jpg" width={400} height={300}></Image>
      <br />
      <Link
        href="https://react-roan-rho.vercel.app/"
        className="text-green-800"
      >
        𝙇𝙞𝙣𝙠
      </Link>
    </div>
  );
}
