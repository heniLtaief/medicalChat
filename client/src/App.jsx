import React from 'react';
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from "universal-cookie";

const apiKey = "yq7qqb6re2xx";
const client = StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className='app__wrapper'>
            <Chat>
                <chanellListContainer/>
                <chanellContainer/>
            </Chat>
        </div>
    )
}

export default App
