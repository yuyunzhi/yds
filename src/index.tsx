import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import ViewsRoot from '@/views/Root'
import Provider from '@/store/index'

ReactDOM.render(
    <Provider>
        <ViewsRoot />
    </Provider>,
    document.getElementById('root')
)
