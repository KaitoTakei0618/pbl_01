import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div>
      <h1>自己紹介</h1>
      <Image
        src="/profile.png"
        alt="プロフィール画像"
        width={100}
        height={100}
      />


      <p>武井 海渡</p>
        <p>
          <strong>所属：</strong>
          法政大学理工学部応用情報工学科
        </p>

        <p>
          <strong>研究分野：</strong>
          生成AI
        </p>

        <p>
          <strong>趣味：</strong>
          猫
        </p>
      </div>
      
  
  );
}