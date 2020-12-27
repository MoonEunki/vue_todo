<template>
  <div id="app">
    <todo-header/>
    <todo-input/>
    <todo-list v-bind:propsdata='todoItems' 
    v-on:removeTodo='removeOneItem'
    v-on:toggleItem='toggleOneItme'
    />
    <todo-footer v-on:clearAll='clearAllItems' />
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

  methods:{
    removeOneItem(todoItem,index){
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index,1) //해당 index를 지우게됨 
    },

    toggleOneItme(todoItem,index){
      this.todoItems[index].completed =!this.todoItems[index].completed //안티패턴
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
    },

    clearAllItems(){
      localStorage.clear() //이벤트받아서 전부삭제
      this.todoItems=[]; //배열 초기화해서 새로고침효과 
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
  width: 90%;
  min-width: 300px;
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
