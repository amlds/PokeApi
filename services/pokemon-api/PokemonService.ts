import { typedFetch } from "@/utils/fetch/TypedFecth";
import { IPokemon, IPokemonList } from "./interfaces/IPokemon";

export class PokemonService {
    private static readonly BASE_URL = "https://pokeapi.co/api/v2/pokemon";

    public static async getPokemons(): Promise<IPokemonList | number> {
        return await typedFetch<IPokemonList>(this.BASE_URL);
    }

    public static async getPokemonById(id: number): Promise<IPokemon | number> {
        return await typedFetch<IPokemon>(`${this.BASE_URL}/${id}`);
    }
}