import React, { Component } from 'react'
import st from './Projects.module.css';
const styles = { form: { marginBottom: 30 } };


export class ProjectForm extends Component {
    state = {
        pokemonName: '',
        // loading: false,
    }

    handleChange = (e) => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = (e) => {
        if (this.state.pokemonName.trim() === '') {//если пользовател ни чего ни вел тогда выполняется этот код trim это пробелы слево справо убирает
            alert('Ведите имя покемона')
            return;//выходим из операции 
        }
        e.preventDefault();
        this.props.onSubmit(this.state.pokemonName);//пришел от projectContainer
        this.setState({ pokemonName: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={styles.form} autoComplete="off">
                    <input
                        className={st.searchInput}
                        type="text"
                        name="pokemonName"
                        value={this.state.pokemonName}
                        onChange={this.handleChange} />
                    <button type='submit '>search</button>
                </form>
            </div>)
    }
};


export default ProjectForm
