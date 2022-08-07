import React from 'react';

const ProjectInfoItem = ({ pokemon: { sprites, name, stats } }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={sprites.other['official-artwork'].front_default}
                alt={name}
                width='300'
                height='100'
            />
            <ul>
                {stats.map(entry => (
                    <li key={entry.stat.name}>
                        {entry.stat.name}:{entry.base_stat}
                    </li>
                ))
                }
            </ul>
        </div >
    )
}

export default ProjectInfoItem;