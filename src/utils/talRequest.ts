import xp from '@heibanfe/xp-sdk'
import Qs from 'qs'

const param = (domain, data) => domain + '?' + Qs.stringify(data)

export default class TalRequest {
    static domain: string

    static token: string

    constructor(domain: string, token: string) {
        TalRequest.domain = domain
        TalRequest.token = token
    }

    /**
     *
     * @param url url
     * @param params object
     * @returns promise
     */
    static get(url: string, params?: any) {
        console.log(`GET: ${url} query: ${JSON.stringify(params)}`)

        return xp.getAsync(param(TalRequest.domain + url, params), {
            headers: {
                Authorization: 'Bearer ' + TalRequest.token
            }
        }) as Promise<any>
    }

    /**
     *
     * @param url url
     * @param form object
     * @returns promise
     */
    static post(url: string, form: any) {
        return xp.postAsync(param(TalRequest.domain + url, form), form, {
            headers: {
                Authorization: 'Bearer ' + TalRequest.token
            }
        }) as Promise<any>
    }
}
