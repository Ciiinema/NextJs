import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.texto_home}>
            <div>
                <Image src="/img/charizard.png" width={"450"} height={"450"} alt={"Charizard"}/>
            </div>
            <div className={styles.texto}>
                <h1>Poke<span>Next</span><Image src="/img/pokeball.png" width={"40"} height={"40"} alt={"Pokeball"}/></h1>
                <div>Projeto criado para praticar os conhecimentos adquiridos em NextJs no curso do prof. <Link href="https://github.com/matheusbattisti">Matheus Battisti</Link></div>
                <div>
                    <span><Link href="/pokemons">Clique aqui</Link> para listar os Pokemons</span>
                </div>
            </div>
        </div>
    )
}
