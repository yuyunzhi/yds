import index from '@/views/index'
// 在写 router 的时候，注意一点，就是该 router 的顺序要跟页面中使用 Link 组件的顺序相同
// 不然可能碰到点击页面路由，发现路由没有变化的 bug
const routerMap = [
    {
        path: '/',
        component: index
    }
]

export default routerMap

function getUrl(path) {
    const href = window.location.href
    const i = href.indexOf('#')
    const base = i >= 0 ? href.slice(0, i) : href
    return `${base}#${path}`
}

export const router = {
    push(url: string) {
        window.location.hash = url
    },
    replace(url: string) {
        window.location.replace(getUrl(url))
    },
    go(n: number) {
        window.history.go(n)
    }
}
