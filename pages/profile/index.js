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
    </div>
  );
}
