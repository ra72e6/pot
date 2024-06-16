export default function ProfileDefault() {
  const profileData = [
    { label: '이름', value: '임혜준' },
    { label: '나이', value: '21살' },
    { label: '생일', value: '2002년 10월 25일' },
  ];

  return (
    <div>
      <h1>/ᐠ.ꞈ.ᐟ\</h1>
      {profileData.map((item, index) => (
        <p key={index}>
          {item.label} : {item.value}
        </p>
      ))}
      <a href="https://blog.naver.com/happyhj1025">🅱🅻🅾🅶</a>
      <br />
      <br />
      <a href="https://github.com/ra72e6">🅶🅸🆃🅷🆄🅱</a>
      <br />
      <br />
    </div>
  );
}
