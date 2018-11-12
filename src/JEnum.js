import Axios from 'react-native-axios'

const Obj = {}
Obj.protocol = "http"
Obj.server = "10.30.116.90"
Obj.port = "8082"

Obj.url = Obj.protocol + "://" + Obj.server + ":" + Obj.port

Obj.axios = Axios.create({
    baseURL: Obj.url,
    withCredentials: true
})

Obj.userInfo = Obj.url + "/accounts"


module.exports = Obj
