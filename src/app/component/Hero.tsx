import Image from "next/image"

function Hero() {
  return (
        <div className="flex flex-col md:flex-row items-center justify-between ">
            {/* leftside */}
            <div className="px-8">
                <h1 className="text-3xl">Welcome to the website</h1>
                <p className="max-w-lg mt-4 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero laudantium aut sed quo. Iure officia 
                libero veritatis laudantium ea! Expedita odio assumenda totam officiis nisi ad veritatis eveniet qui!</p>
            </div>
            {/* rightside */}
            <div className="p-5 mt-4 md:mt-0 ">
                <Image
                src={"/logo.png"}
                alt="Logo"
                width={300}
                height={300}
                />

                
            </div>
        </div>
  )
}

export default Hero
