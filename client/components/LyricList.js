import React, { Component } from 'react'

export default class LyricList extends Component {
    render() {

        const { lyrics } = this.props;

        return (
            <div>
                <ul className="collection">
                    {lyrics.map(lyric => {
                        return (<li key={lyric.id} className="collection-item">
                            {lyric.content}
                        </li>);
                    })}

                </ul>
            </div>
        )
    }
}
