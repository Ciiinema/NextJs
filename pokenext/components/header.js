import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <header className={"cabecalho"}>
            <div className={"logomarca"}>
                <Image src='/img/pokeball.png' width={'40'} height={'40'}/>
                <h1>PokeNext</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/pokemons">Lista de Pokemons</Link>
                    </li>
                    <li>
                        <Link href="sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}