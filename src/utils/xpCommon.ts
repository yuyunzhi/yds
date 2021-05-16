import xp from '@heibanfe/xp-sdk'

export function setReactNativeHeader(title) {
    xp.setNavigateBgColor({
        color: '#ffffff',
        barType: 0
    })
    xp.setNavigate({
        title,
        color: '#262626',
        fontSize: 18,
        backItemOption: {
            iconType: 0
        },
        closeItemOption: {
            iconType: 0
        }
    })
}

export function registerOnShow(cb) {
    xp.listenerXPInstance((res) => {
        const { module, event } = res
        if (module === 'RootWeb' && event === 'onShow') {
            console.log('首页被触发了')
            cb()
        }
    })
}
