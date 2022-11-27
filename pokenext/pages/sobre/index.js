import Link from "next/link";
import Image from "next/image";

import styles from '../../styles/Sobre.module.css';

export default function Sobre () {
    return (
        <div className={styles.texto_sobre}>
            <div>
                <Image src="/img/charizard.png" width={"500"} height={"500"} alt={"Charizard"}/>
            </div>
            <div className={styles.texto}>
                <h1>Sobre o projeto</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod leo at aliquet molestie. Proin lobortis massa aliquet, tempus mauris sed, vulputate metus. Quisque bibendum erat a sodales sodales. Morbi venenatis nisi accumsan quam elementum euismod. Vestibulum blandit quis orci in ultricies. Proin tincidunt ante ut ipsum pharetra varius. In hac habitasse platea dictumst. Proin vitae nulla nec eros porta ornare. Vestibulum egestas enim scelerisque massa tempus, vitae volutpat orci venenatis. Duis ut convallis augue.</div>
                <div>
                    <span><Link href="/pokemons">Clique aqui</Link> para listar os Pokemons</span>
                </div>
            </div>
        </div>
    )
}