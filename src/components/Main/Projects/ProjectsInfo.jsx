import PokemonApi from 'ProjectApi/pokemon-api';
import React, { Component } from 'react'
import ProjectErrorView from './ProjectErrorView';
import ProjectInfoItem from './ProjectInfoItem';
import ProjectPendingView from './ProjectPendingView';
// import pokemonApi from ''

export class ProjectsInfo extends Component {
    state = {
        pokemon: null,
        // loading: false, /pending который мы прописали ниже в условии,заменяет значение loading 
        error: null,
        status: 'idle',
    }
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            // console.log('изменилось имя покемона...');
            // this.setState({ loading: false, pokemon: null })//каждый раз при поиске что бы показать не предедущую картинку а показать загружаем или прелодер
            this.setState({ status: 'pending' });
            PokemonApi(nextName)
                // .then(console.log)
                .then(pokemon => this.setState({ pokemon, status: 'resolved' })) //когда покемон ответ от сервера пришел статус ресолвед все ок 
                .catch(error => {
                    console.log(error);
                    this.setState({ error, status: 'rejected' })
                })
            // .finally(() => this.setState({ loading: false }))
        }
    };
    render() {
        // const { loading, pokemon, error, status } = this.state;
        const { pokemon, status, error } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') {
            return <h1>введите имя покемона</h1>
        }

        if (status === 'pending') {
            return <ProjectPendingView pokemonName={pokemonName} />
        }

        if (status === 'rejected') {
            // return <h2>{error.message}</h2>
            return <ProjectErrorView message={error.message} />
        }

        if (status === 'resolved') {
            return <ProjectInfoItem pokemon={pokemon} />
        }
        // return (
        //     <div>
        //         {error && <h2>{error.message}</h2>}
        //         {loading && <Preloader />}
        //         {/* {loading && <h3>загружаем...</h3>} */}
        //         {!pokemonName && <h1>введите имя покемона</h1>}
        //         {pokemon//если покемон есть то тогда выполнится этот код 
        //             && <div><p>{pokemon.name}</p>
        //                 <img src={pokemon.sprites.other['official-artwork'].front_default} alt='pokemon' width='300' />
        //             </div>}
        //     </div>
        // )
    }
}

export default ProjectsInfo
