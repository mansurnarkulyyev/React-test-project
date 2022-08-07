import Preloader from 'components/commons/Preloader';
import React from 'react';
import ProjectInfoItem from './ProjectInfoItem';
// import pendingImage from 'someImage';

const ProjectPendingView = ({ pokemonName }) => {
    //СКЛЕТОН по умолчанию даем параметры на случай если от бекенда не приходит ответы

    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    // front_default: pendingImage
                },
            },
        },
        stats: []
    };


    return (
        <div>
            <div>
                <Preloader />
                <h2>загружаем...</h2>
            </div>
            <ProjectInfoItem pokemon={pokemon} />
            {/*в ProjectInfoItemе деструктуризирует pokemon свойств */}
        </div>
    )
}

export default ProjectPendingView;
