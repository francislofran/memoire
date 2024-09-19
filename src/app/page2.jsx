import Image from "next/image";
import data from "../../data.json";

function LinkCard({ href, title, image }) {
  
  return (
<a href={href} className="flex items-center p-1 w-full rounded-md 
                hover:scale-105 transition-all bg-gray-100 mb-2">

    <div className="flex text-center w-full">
    {image && 
   <Image 
   className="rounded-full" 
   alt={title} 
   src={image}
   width={30} 
   height={30} />
    }

      <h2 className="font-semibold w-full text-center text-gray-700">{title}</h2>
    </div>
  </a>

  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-9">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.Profil}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 m-8 text-xl">{data.name}</h1>
      
      {
        data.links.map(link => (
          <LinkCard key={link.href} href={link.href} title={link.title} image={link.image} />
        ))
      }
    </div>
  );
}
