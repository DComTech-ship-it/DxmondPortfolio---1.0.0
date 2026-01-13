import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        <p>2026 © Designed by <Link href={""} target="_blank" className="hover:text-primary">DcomTech-ship-it</Link> — All rights reserved </p>
                        <p>Created with care · <Link href={""} target="_blank" className="hover:text-primary">@000</Link> · 0k followers • Distributed by <Link href={"https://www.themewagon.com/"} target="_blank" className="hover:text-primary">Me</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer