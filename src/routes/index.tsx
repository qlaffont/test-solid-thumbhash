//@ts-ignore
// eslint-disable-next-line import/no-unresolved
import Image from '../../public/test.jpg?thumb';

export default function Home() {
  console.log(Image);

  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <img
        src={`${Image.originalSrc.replace('public', '')}`}
        width={Image.originalWidth}
        height={Image.originalHeight}
        alt="Example optimization"
        style={{
          'background-image': `url(${Image.thumbSrc})`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
        }}
      />
    </main>
  );
}
