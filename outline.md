# lulu_fans
项目主要分为三个部分：前端页面，后台，后台管理页面（管理系统）

## 一. 前端页面
### 表情包页面 sutanpu

```js
{
  id: "xxxx",
  url: "xxxx",
  name: "xxx" //可选
}
```

### 同人图页面 photo

```js
{
  id: "xxxx",
  url: "xxxx",
  name: "xxx",//可选
  author: "xxx" //可选
}
```
### 同人音乐页面 music （可选）

```js
{
  id: "xxxx",
  url: "xxxx",
  name: "xxx",
  author: "xxx" //可选
}
```
### 同人视频页面 video （可选）
视频只放b站链接，前端可以嵌入b站播放器或者直接跳转。
其实b站主页有视频，此页面用处不大，点击导航栏直接跳转lulu的b站主页都行。

```js
{
  id: "xxxx",
  url: "xxxx",
  name: "xxx",//可选
  author: "xxx" //可选
}
```

### 时间线页面 timeline

```js
{
  id: "xxxx",
  date: "yyyy年mm月dd日",
  content: "xxxx",
  title: "" //预留
}
```

### 留言 comment（旧网站保留项目）


## 二. 后台
托管资源，提供api

## 三. 后台管理页面（系统）
 - 管理员登录
 - 密码修改（可选）
 - 对 **表情包，同人图，同人音乐，同人视频，留言** 的增删改查

（后台与后台页面之间不一定需要前后分离，如需分离则需要设计对应的api）

----

## 前端页面需要的API

 - GET /api/v1/sutanpu-list 获取表情包列表

```js
//返回数据
{
  status: true
  data: {
    sutanpu:[
      {
        id: "xxxx",
        url: "xxxx",
        name: "xxx" //可选
      }
    ]
  }
}
```

 - GET /api/v1/photo-list 获取同人图列表

```js
//返回数据
{
  status: true
  data: {
    photo:[
      {
        id: "xxxx",
        url: "xxxx",
        name: "xxx",//可选
        author: "xxx" //可选
      }
    ]
  }
}
```

 - GET /api/v1/comment-list 获取留言列表
 
```js
//返回数据
{
  status: true
  data: {
    photo:[
      {
        id: "xxxx",
        author: "xxxx",
        content: "xxxx",
      }
    ]
  }
}
```

 - GET /api/v1/timeline-list 获取时间线列表
 
```js
//返回数据
{
  status: true
  data: {
    photo:[
      {
        id: "xxxx",
        date: "yyyy年mm月dd日",
        content: "xxxx",
        title: "" //预留
      }
    ]
  }
}
```

 - 返回错误

```js
{
  status: false
  code: "ERROR_xxx" //错误码
}
```
