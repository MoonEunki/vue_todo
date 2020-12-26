<template>
  <div id="app">
    <todo-header/>
    <todo-input v-on:addTodoItem='addOneItem'/>

    <!-- 이제 app에서 하위컴포넌트로 데이터넘겨줌
    propsdata에 todoItems를 담아서 넘김-->
    <todo-list v-bind:propsdata='todoItems' v-on:removeTodo='removeOneItem'/>
    <todo-footer/>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {

  //하위컴포넌트에있던것을 app으로 옮김
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  },

  // 추가하기 기능을 이벤트를 통해 받아서 여기서 추가하게 변경 
  methods:{
    addOneItem(newTodoItem){ 
      let obj={ completed:false, item:newTodoItem}
      localStorage.setItem(newTodoItem,JSON.stringify(obj))
      this.todoItems.push(obj) //바로 list에 반영
    },

  // 삭제하기 기능을 이벤트를 통해 받아서 여기서 삭제하게 변경 
    removeOneItem(todoItem,index){
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index,1) //해당 index를 지우게됨 
    }
  },

  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
} 
input{
  border-style:groove;
  width:200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
