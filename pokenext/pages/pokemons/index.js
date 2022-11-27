import Image from "next/image";

import styles from "../../styles/Pokemons.module.css";

import Card_pokemon from "../../components/card_pokemon";

export async function getStaticProps () {
    
    const maxPokemons = 251,
          api = "https://pokeapi.co/api/v2/pokemon";

    const res = await fetch(`${api}?limit=${maxPokemons}`),
          data = await res.json();

    // add pokemon index
    data.results.map((pokemon, index)=>{
        pokemon.id = index + 1;
    })

    return {
        props: {
            listPokemons: data.results,
        },
    }
}

export default function Pokemons ({listPokemons}) {

    console.log("listPokemons: ",listPokemons)

    return (
        <>
            <div className={styles.pokemons_container}>
                <div className={styles.pokemon_titulo}>
                    <h1>Poke<span>Next</span></h1>
                    <Image src="/img/pokeball.png" width={"60"} height={"60"} alt={"Pokeball"}/>
                </div>
                <div className={styles.pokemon_container}>
                    {listPokemons.map((pokemon)=>(
                        <Card_pokemon key={pokemon.id} pokemon={pokemon}/>
                    ))}
                </div>
            </div>
        </>
    )
}