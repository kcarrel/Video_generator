import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }
// probably will restructure to remove the state/component part
   

    render() {
        return (
            <main className="main">
                <Paper
                    className="form">
                    <form>
                        <TextField
                            id="search-form"
                            label="Search for..."
                            className="search"
                            value={this.props.search}
                            name="search"
                            onChange={(ev) => this.props.handleChange(ev)}>                 
                        </TextField>
                        <Button
                            onClick={(ev) => this.props.handleSubmit(ev)}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="submit">
                            Submit
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default Search;
