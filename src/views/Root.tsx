import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import routerMap from '@/router/index'

import '@/styles/base.less'

const ViewsRoot = (): JSX.Element => (
    // 这里必须使用 Suspense 组件将 Router 组件包裹起来，因为使用了 lazy 方式导入的组件必须这么干
    <Suspense fallback={<div>loading...</div>}>
        <Router>
            <Switch>
                {routerMap.map((item) => (
                    <Route exact key={item.path} path={item.path} component={item.component} />
                ))}
            </Switch>
        </Router>
    </Suspense>
)

export default ViewsRoot
