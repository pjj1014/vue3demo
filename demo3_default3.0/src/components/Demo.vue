<template>
<h2>{{sum}}</h2>
<button @click="sum++">点我加+1</button>
<hr>
<h2>{{msg}}</h2>
<button @click="msg+='!'">修改信息</button>
<hr>
<h2>姓名：{{person.name}}</h2>
<h2>年龄：{{person.age}}</h2>
<h2>薪资：{{person.job.j1.salary}}</h2>
<br>
<button @click="person.name+='~'">修改姓名</button>
<button @click="person.age++">增加年龄</button>
<button @click="person.job.j1.salary++">涨薪资</button>
</template>

<script>

import {ref} from 'vue'
export default {
  name: 'Demo',
  //vue2 watch
  //#region 
  // watch:{
  //   // sum(newValue,oldValue){
  //   //   console.log('sum的值变了',newValue,oldValue);
  //   // }

  //   sum:{
  //     immediate:true,
  //     deep:true,
  //     handler(newValue,oldValue){
  //       console.log('sum的值变化了',newValue,oldValue);
  //     }
  //   }

  // },
  //#endregion

  setup(){

    //数据
    let sum = ref(0)
    let msg=ref('你好啊')
    let person=ref({
      name:'张三',
      age:'18',
      job:{
        j1:{
          salary:20
        }
      }
    })

    //方法

    //返回一个对象（常用）
    return{
      sum,
      msg,
      person
    }

  }
}
</script>


