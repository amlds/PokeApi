"use client"

import { useEffect, useState } from "react";
import { IPokemon } from "@/services/pokemon-api/interfaces/IPokemon";
import Link from "next/link";
import Image from 'next/image';
import { Badge } from "@/components/Badge";


export default function PokemonPage({
    params, 
}: {
    params: { pokemonId: string };
}) {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
            const pokemon = await data.json();
            setPokemon(pokemon);
            console.log(pokemon);
        };

        fetchPokemon();
    }, [params.pokemonId]);
    

    return (
        <div className="pokemon--view">
            <Link href="/">Retour au pokedex</Link>
            {pokemon && (
                <div className="presentation--pokemon">
                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={300} height={200} />
                    <div className="presentation--pokemon__text">
                        <h2>{pokemon.name} :</h2>
                        <ul>
                            {
                                pokemon.types.map((type, index) => (
                                    <Badge key={index} color={type.type.name}>
                                        <li key={index}>{type.type.name}</li>
                                    </Badge>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}