import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    color: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, color }) => {
    return (
        <span className={`badge badge--${color}`}>
            {children}
        </span>
    )
}