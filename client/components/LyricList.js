import React, { Component } from 'react'

export default class LyricList extends Component {

    onLike(id){
        alert(id);
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
                                className="material-icons right"
                                onClick={() => this.onLike(lyric.id)}
                            >thumb_up</a>
                        </li>);
                    })}

                </ul>
            </div>
        )
    }
}
