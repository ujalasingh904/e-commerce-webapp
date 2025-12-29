import Link from "next/link";
import Menu from "./Menu";

export default function Navbar() {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
                {/* mobile */}
            <div className="h-full flex items-center justify-between">


                <Link href={"/"}>
                    <div className="text-2xl tracking-wide">ShopEase</div>
                </Link>
                <Menu />
            </div>

            {/* bigger screens */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* left */}
                <div className="w-1/3"></div>
                {/* right */}
                <div className="w-2/3"></div>
            </div>
        </div>
    )
}