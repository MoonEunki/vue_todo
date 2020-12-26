<template>
  <div id="app">
    <todo-header/>
    <todo-input/>

    <!-- 이제 app에서 하위컴포넌트로 데이터넘겨줌
    propsdata에 todoItems를 담아서 넘김-->
    <todo-list v-bind:propsdata='todoItems'/>
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
