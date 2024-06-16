import Image from 'next/image';
export default function team() {
  return (
    <div>
      <h1> 팀명 : NCT react</h1>
      <h3> 팀원 및 개인 포폴</h3>
      <a href="https://reactportfolio-azure.vercel.app/">김태현 </a>

      <a href="https://portfolio-drab-one-22.vercel.app/">신명진 </a>

      <a href="https://hehehe-sage.vercel.app">최경은 </a>

      <a href="https://pot-eight.vercel.app/">임혜준 </a>

      <a href="https://converse-eta-blue.vercel.app/">윤지현</a>
      <br />
      <Image src="/images/team.jpg" width={400} height={300}></Image>
      <h2>↓해당 링크</h2>
      <a href="https://converse-eta-blue.vercel.app/">𝙇𝙞𝙣𝙠</a>
    </div>
  );
}
