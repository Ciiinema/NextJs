import Image from "next/image";
import Link from "next/link";

import Styles from "../styles/Pokemons.module.css"

export default function Card_pokemon (props) {

    const pokemon = props.pokemon;
    
    console.log(pokemon)
    return (
        <>
            <div className={Styles.pokemon_card}>
                <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width={"200"} height={"200"} alt={pokemon.name}/>
                <p className={Styles.id}>{`#${pokemon.id}`}</p>
                <p>{pokemon.name}</p>
                <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
            </div>
        </>
    )
}