import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <ul className="border-b border-slate-200 py-4 flex items-center justify-center gap-[2rem]">
                <li className="text-slate-600"><Link href="/">Home</Link></li>
                <li className="text-slate-600"><Link href="/about">About</Link></li>
                <li className="text-slate-600"><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}