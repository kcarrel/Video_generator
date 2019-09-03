import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class Login extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <main className="main">
                <CssBaseline />
                <Paper className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className="form">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel >Email Address</InputLabel>
                            <Input id="email" name="email" onChange={(ev) => this.props.handleChangeLogin(ev)} value={this.props.email} autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel >Password</InputLabel>
                            <Input name="password" type="password" id="password" onChange={(ev) => this.props.handleChangeLogin(ev)} value={this.props.password} autoComplete="current-password" />
                        </FormControl>
                            <Button
                                onClick={(ev) => this.props.handleLogin(ev)}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Login
                        </Button>

                    </form>
                </Paper>
            </main>
        );
    }
}

export default Login;