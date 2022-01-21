// 接口请求模块
import axios from "axios";
import postConfig from "../postConfig/index";
// import unit from "../../common/unit"
const mockUrl = "http://127.0.0.1:4523/mock/587324";


const $axios = async (params)=>{
    const {postName,data} = params;
    const postObj = postConfig[postName];//配置数据
    return  axios({
      url:`${mockUrl}${postObj.route}`,//地址
      data:Object.assign(postObj.defaultParams,data),//参数
      method:postObj.method || "GET" //请求方式
    })
}

export default $axios;