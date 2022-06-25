import Link from "next/link";

export default function Header(){
    return (
        <div className={"header"}>
            <div className={"logo"}>
                <Link href={"/"}>
                    <a>
                        <span className={"text-cyan-100"}>HOAI LAM</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}