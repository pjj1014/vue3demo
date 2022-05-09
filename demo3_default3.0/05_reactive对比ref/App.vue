<template>
<h1>一个人的信息</h1>
<h2 v-show="person.name">姓名:{{person.name}}</h2>
<h2 v-show="person.sex">性别:{{person.sex}}</h2>
<h2>年龄:{{person.age}}</h2>
<h2>工作信息</h2>
<h3>岗位:{{person.job.type}}</h3>
<h3>薪资:{{person.job.salary}}</h3>
<h3>爱好:{{person.hobby}}</h3>
<h3>地址：{{person.location.address}}{{person.location.community}}</h3>
<h3>测试数据:{{person.location.a.b.c}}</h3>
<button @click="changeInfo">修改人的信息</button>
<button @click="addSex">增加性别</button>
<button @click="deleteName">删除名字</button>
</template>

<script>

import {reactive} from 'vue'
export default {
  name: 'App',
  
  setup(){
    //数据
    let person =reactive({
      name:'张三',
      age: 18,
      job: {
        type:'前端工程师',
        salary:'30k'
      },
      location: {
        address:'重庆市渝北区渝鲁大道',
        community:'庆业九寨映像小区',
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['学习','上班','摸鱼']
    })

    //方法
    function changeInfo(){
      person.name='李四'
      person.age=20
      person.job.type='后端工程师'
      person.job.salary='35k'
      person.location.address='重庆市江北区北城四路111号'
      person.location.community='融景城锦峰小区'
      person.hobby=['游戏','下班','静默']
      person.name='李四'
      person.location.a.b.c=999
      console.log(person)
    }

    function addSex(){
      console.log(person.sex)
      person.sex='男'
      console.log(person.sex)
    }

    function deleteName(){
      console.log(person.name)
      delete person.name
      // person.name=null
      console.log(person.name)
    }

    //返回一个对象（常用）
    return{
      person,
      changeInfo,
      addSex,
      deleteName
    }

  }
}
</script>


