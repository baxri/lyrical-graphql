import React, { Component } from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
    render() {

        console.log(this);

        return (
            <div>
                <h1>List of songs</h1>
            </div>
        )
    }
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);