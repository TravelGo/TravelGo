import Axios from 'react-native-axios'
import Cookie from 'react-native-cookie';

const Obj = {}
Obj.protocol = "http"
Obj.server = "35.231.168.105"
Obj.port = "80"

Obj.url = Obj.protocol + "://" + Obj.server // + ":" + Obj.port

Obj.axios = Axios.create({
    baseURL: Obj.url,
    withCredentials: true
})

Obj.userInfo = Obj.url + "/accounts"
Obj.regist = Obj.url + "/accounts/create"
Obj.login = Obj.url + "/accounts/login"

Obj.travelStop = Obj.url + "/travelstop/"
Obj.travelStopVisit = Obj.url + "/travelstop/visit/"
Obj.visited = Obj.url + "/travelstop/visited/"

Obj.recommanded = Obj.url + "/travelstop/recommanded"

Obj.comment = Obj.url + "/comment/"

module.exports = Obj
