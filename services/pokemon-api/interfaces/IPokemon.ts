export interface IPokemonList {
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}

export interface IPokemon {
    name: string;
    url: string;
    sprites: { front_default: string };
    types: IPokemonType[];
}

export interface IPokemonType {
    slot: number;
    type: {
        name: TypeName;
        url: string;
    }
}

type TypeName = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow';