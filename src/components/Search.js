import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    render() {
        return (
            <form>
                <TextField
                    id="search-form"
                    label="Search for..."
                    className="search"
                    value={this.state.search}
                    name="search"
                    onChange={this.handleChange}
                >
                    
                </TextField>
            </form>
        )
    }
}

export default Search;
