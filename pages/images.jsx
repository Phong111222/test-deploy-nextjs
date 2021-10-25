import Image from 'next/image';

export default function ImagePage() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num}>
          {/* <img src={`/images/${num}.jpeg`} width={200} height={200} key={num} /> */}
          <Image
            src={`/images/${num}.jpeg`}
            alt={`image - ${num}`}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
