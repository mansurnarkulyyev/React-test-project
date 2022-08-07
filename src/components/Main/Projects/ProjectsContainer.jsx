// import Preloader from 'components/commons/Preloader'
import React, { Component } from 'react'
// import Projects from '.'
import ProjectForm from './ProjectForm'
import ProjectsInfo from './ProjectsInfo'

export default class ProjectsContainer extends Component {
    state = {
        pokemonName: '',
    }


    handleFormSubmit = pokemonName => {
        this.setState({ pokemonName })
    }

    render() {
        return <>
            <ProjectForm onSubmit={this.handleFormSubmit} />
            <ProjectsInfo pokemonName={this.state.pokemonName} />
        </>
    }
}


