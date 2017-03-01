/**
 * Created by carlkane1987 on 28/2/17.
 */
import {API_END_POINT, TEST_API} from './constant';
import fetch from "isomorphic-fetch";

class Http {
    constructor() {

    }

    /**GET http request*/
    getListData(id) {
        var url = `${API_END_POINT + id}`;
        url = url + "?" + encodeURIComponent("param") + "=" + encodeURIComponent("value");
        var result = fetch(url);
        return result.then((response) => {
            return response.json()
        }).then((json) => {
                if (json && json != undefined) {
                    return json;
                }
            }
        ).catch(function (ex) {
            console.log('failed', ex)
        })
    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new Http();
        }
        return this.instance;
    }
}
var http = Http.getInstance();
export default http;