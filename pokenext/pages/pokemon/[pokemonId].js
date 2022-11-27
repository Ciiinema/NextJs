import Image from "next/image";
import Link from "next/link";

import Styles from "../../styles/Pokemon.module.css"

export const getStaticPaths = async() => {
    
    const maxPokemons = 251,
          api = "https://pokeapi.co/api/v2/pokemon";

    const res = await fetch(`${api}?limit=${maxPokemons}`),
          data = await res.json();

    // params
    const paths = data.results.map((pokemon, index)=> {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    });

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(context) => {

    const id = context.params.pokemonId;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data },
    }

}

export default function Pokemon ({pokemon}) {
    return (
        <>
            <div className={Styles.container}>
                <Link href={"/pokemons"} className={Styles.botao_voltar}>Voltar</Link>
                <div className={Styles.pokemon_container}>
                    <div className={Styles.pokemon_resumo}>
                        <h1>{pokemon.name}</h1>
                        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width={"350"} height={"350"} alt={pokemon.name}/>
                        <h2>#{pokemon.id}</h2>
                    </div>
                    <div className={Styles.pokemon_dados}>
                        <ul>
                            <li>Altura: <span>{pokemon.height * 10} cm</span></li>
                            <li>Peso: <span>{pokemon.weight / 10} kg</span></li>
                            {pokemon.types.map((type, index)=><li key={index} className={`${Styles.tipo} ${Styles['type_'+type.type.name]}`} >Tipo {type.slot}: <span>{type.type.name}</span></li>)}
                            {pokemon.abilities.map((ability, index)=><li key={index}>Habilidade {index+1}: <span>{ability.ability.name}</span></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}