import Image from "next/image"
import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 rounded-full border-1 border-gray-800 shadow-lg">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/spooky.svg"
          alt="Twitch-Clone"
          height="10"
          width="60"
          className=""
        />
      </div>
    </div>
  )
}
