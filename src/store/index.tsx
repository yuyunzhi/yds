import React, { createContext, useReducer, useContext, FC, useEffect, useState } from 'react'
import reducer from './reducer'

// 导出初始状态
export const initialState = {
    count: 0
}

interface IProvider {

}

// 创建 context
const CountCtx = createContext(null)

// 创建并导出对应的 Provider
const Provider: FC<IProvider> = (props) => {
    // 这里规定就是这么传参数和使用的，具体可以看 react hooks 相关文档
    const [state, dispatch] = useReducer(reducer, initialState)

    return <CountCtx.Provider value={{ state, dispatch }}>{props.children}</CountCtx.Provider>
}

export default Provider
// 导出 context 中的 value，可通过该函数获取到 state 和 dispatch
export const useJLLDomain = () => useContext(CountCtx)
