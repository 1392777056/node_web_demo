//首先安装Mockjs    cnpm install mockjs
//引入mockJs 模块
let Mock=require('mockjs')
let data=Mock.mock({
    'list|5':[
        {
            'id|+1':1,
            'name':'测试',
            'str': '@string',
            'integer': '@integer',
            'date': '@date',
            'img': '@image',
            'title': '@ctitle',
            'content': '@cword(20)',
            '1name': '@cname',
            '1name22': '@cfirst',
            '1name33': '@last',
            '1233': '@url',
            '1na44me22': '@ip',
            '5555': '@email',
            'sfsfff': '@region',
            '12333333': '@county'
        }
    ]
})

console.log(JSON.stringify(data,null,2))
//生成最基本的类型 date 八大基础类型等等，只需要在后面写上@基本类型就可以。  例子：'str': '@string','integer': '@integer'
//图像方法： 随机 'img': '@image',
//文本方法：随机 英标题@title  中标题@ctitle   内容：@cword(100)   括号里面的100可以随便写，100个字
//名称方法： @cname:中文名称    @cfirst  中文姓氏      @last：英文姓氏
//网络方法:  @url: 随机的url地址   @ip   随机的ip地址   @email  随机的email
//地址方法： @region 区域      @county  省市县
//最后可以在www.easy-mock.com官网去模拟生成数据



