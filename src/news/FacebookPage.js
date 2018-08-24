import React, { Component } from 'react';
import {
    FBComments,
    FBCommentsCount,
    FBEmbedPost,
    FBEmbedVideo,
    FBFollow,
    FBLike,
    FBPage,
    FBSend,
    FBShare
} from 'facebook-plugins';

class FacebookPage extends Component {
    render() {
        return(
            <div>
                <div>
                    <FBPage appId="640433256076330"
                            href="https://www.facebook.com/twotiltwelve"
                            tabs={['timeline', 'events', 'messages']}/>
                </div>
            </div>
        );
    }
}

export default FacebookPage;