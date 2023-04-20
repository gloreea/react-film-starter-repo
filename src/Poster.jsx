import React, { Component } from 'react';

export default  class Poster extends Component {
    render () {
        
        const {url,alt} = this.props
        return (
            <img src={url} alt={alt}/>
        )
    }
}