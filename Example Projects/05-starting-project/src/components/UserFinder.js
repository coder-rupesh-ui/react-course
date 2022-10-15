import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    componentDidMount() {
        // suppose we did an http call and on success we updated the list.
        this.setState({filteredUsers: this.context.users});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }

    render() {
        return (
            <Fragment>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}

/* const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Fragment>
            <input type='search' onChange={searchChangeHandler} />
            <Users users={filteredUsers} />
        </Fragment>
    );
};
 */
export default UserFinder;