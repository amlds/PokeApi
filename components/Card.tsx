import { IPokemon } from '@/services/pokemon-api/interfaces/IPokemon'
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

interface CardProps {
    item: IPokemon;
}

export const Card: React.FC<CardProps> = ({ item }) => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    
    const idUrl = useMemo(() => {
        const url = item.url.split('/');
        return url[url.length - 2];
    }, [item.url]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${idUrl}`);
            const pokemon = await data.json();
            setPokemon(pokemon);
        };

        fetchPokemon();
    }, [idUrl]);


    return (
        <Link href={`/pokemon/${idUrl}`}>
            <div className="cardPokemon">
                { pokemon && <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={50} height={50} /> }
                <p className="text-center">{item.name}</p>
            </div>
        </Link>
    )
}