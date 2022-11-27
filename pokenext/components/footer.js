import Link from "next/link";

export default function Footer () {
    return (
        <footer className={"rodape"}>
            <span>PokeNext</span><span>desenvolvido por Fernando Silva: <Link href="https://github.com/Ciiinema">GitHub</Link>, &copy; 2022</span>
        </footer>
    )
}