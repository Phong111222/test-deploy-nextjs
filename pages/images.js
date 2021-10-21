import Image from 'next/image';

export default function ImagePage() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num}>
          {/* <img src={`/images/${num}.jpeg`} width={200} height={250} key={num} /> */}
          <Image
            src={`/images/${num}.jpeg`}
            width={500}
            height={500}
            alt={`image - ${num}`}
          />
        </div>
      ))}
    </div>
  );
}
