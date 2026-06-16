import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">

        <div className="flex flex-col items-center">
          <Image
            src="/profile.png"
            alt="プロフィール画像"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500"
          />

          <h1 className="text-3xl font-bold mt-4">
            武井 海渡
          </h1>

          <p className="text-gray-500">
            法政大学 理工学部 応用情報工学科
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <h2 className="font-semibold text-blue-600">
              研究分野
            </h2>

            <Link
              href="/research"
              className="text-blue-500 hover:underline"
            >
              生成AI
            </Link>
          </div>

          <div>
            <h2 className="font-semibold text-blue-600">
              趣味
            </h2>

            <Link
              href="/hobby"
              className="text-blue-500 hover:underline"
            >
              猫
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}