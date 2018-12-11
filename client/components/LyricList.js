import React, { Component } from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricList extends Component {

    onLike(id, likes) {
        this.props.mutate({
            variables: {
                id
            },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    __typename: 'LyricType',
                    id: id,
                    likes: likes + 1,
                }
            }
        }).then((data) => {
            console.log(data);
        });
    }

    render() {

        const { lyrics } = this.props;

        return (
            <div>
                <ul className="collection">
                    {lyrics.map(lyric => {
                        return (<li key={lyric.id} className="collection-item">
                            {lyric.content}

                            <a
                                href="javascript:void(0)"
                                className="material-icons"
                                onClick={() => this.onLike(lyric.id, lyric.likes)}
                            >thumb_up</a>
                            <i> {lyric.likes}</i>
                        </li>);
                    })}

                </ul>
            </div>
        )
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID){
        likeLyric(id: $id){
            id
            likes
        }
    }
`;

export default graphql(mutation)(LyricList);
