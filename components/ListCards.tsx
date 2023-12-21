import { IPokemon } from '@/services/pokemon-api/interfaces/IPokemon';
import React from 'react'
import { Card } from './Card';

interface ListCardsProps {
    items: IPokemon[];
}

export const ListCards: React.FC<ListCardsProps> = ({ items }) => {
    return (
        <div className="list-card">
            {items.map((item) => (
                <Card key={item.name} item={item} />
            ))}
        </div>
    )
}