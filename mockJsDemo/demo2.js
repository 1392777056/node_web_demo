//首先安装Mockjs    cnpm install mockjs
//引入mockJs 模块
let Mock=require('mockjs')
let data=Mock.mock({
    'list|5':[
        {
            'id|+1':1,
            'name':'测试',
            'str|6':'1',
            'str2|3-8':'2',
            //'number|3-9': 0,
            'number|2-6.2-4': 0,
            'bool|1-3':true,
            'object|1-2': {
                id:1,
                name:'zhangsan12',
                sex:'nv',
                tphone:123333
            },
            'arr|1-3':['red','green']
        }
    ]
})

console.log(JSON.stringify(data,null,2))
//字符串
//'name|count':string   //count是及 就生成多个string字符串 例如：'str|6':'1'
//'name|min-max':string   //min最小，max最大，随机生成string（min-max）区间的字符串 例如：'str2|3-8':'2'
//数字
//'name|+1':number    //自增+1, 'id|+1':1,  1 2 3 4。。。
//'number|min-max': 0    //代表随机生成的数  在min-max区间
//'number|min-max.dcount': 0    //代表随机生成的数  在min-max区间  ,dcount代表保留几位小数
//'number|min-max.dmin-dmax': 0    //代表随机生成的数  在min-max区间  ,代表保留几位小数在dmin-dmax之间随机取值
//布尔
//'name|1':true或者false   就代表概率为 1/2
//'name|min-max':value     也代表概率为 有个公式 min/(min+max)的      'bool|1-3':true
//'object|2':object 对象格式       //代表随机从后面的object随机取出object中的两个属性
//'object|min-max':object 对象格式       //代表随机从后面的object随机取出object中的min-max区间个属性 
//'arr|2':array         //代表count是几，就将array写几次
//'arr|min-max':array         //代表最少重复min次，最多重复max次


