import { FavoritePokemons } from "@/pokemons";


export const metadata = {
    title: 'Favoritos',
    description: 'Pokemos favoritos',
};

export default async function FavoritePage() {
    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-2'> Pokémons favoritos</span>

            <FavoritePokemons  />
        </div>
    );
}
