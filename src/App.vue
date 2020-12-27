<template>
  <div id="app">
    <todo-header/>
    <todo-input/>
    <todo-list/>
    <todo-footer/>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {

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
