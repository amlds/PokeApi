"use client"

import { useEffect, useState } from 'react';
import { ListCards } from "@/components/ListCards"
import { PokemonService } from "@/services/pokemon-api/PokemonService"
import { IPokemon } from "@/services/pokemon-api/interfaces/IPokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await PokemonService.getPokemons();
      if (typeof data !== 'number') {
        setPokemons(data.results);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <main className="pokedex">
      <div>
        <h1 className="text-center my-5 text-4xl">Pokedex</h1>
      </div>
      <ListCards items={pokemons} />
    </main>
  )
}