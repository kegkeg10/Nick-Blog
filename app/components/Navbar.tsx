import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 sticky p-4 top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Nicholas Garner</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link href='https://github.com/kegkeg10' className="text-white/90 hover:text-white">
                        <FaGithub />
                    </Link>
                    <Link href='https://www.linkedin.com/in/nicholasgarner13/' className="text-white/90 hover:text-white">
                        <FaLinkedinIn />
                    </Link>
                    <Link href='https://nickg-port.vercel.app/' className="text-white/90 hover:text-white">
                        <FaLaptop />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
