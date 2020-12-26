<template>
<div class="inputBox shadow">
  <!--  v-on:keyup.enter='addTodo' 는 input에서 엔터쳤을때 실행 -->
  <input v-model="newTodoItem" placeholder="edit me" v-on:keyup.enter='addTodo' >
  <span class="addContainer">
    <font-awesome-icon icon="plus" v-on:click='addTodo'/>
  </span>
</div>
</template>

<script>
export default {
  data(){
    return {
      newTodoItem:''
    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem!==''){
        // this.$emit('이벤트이름',인자)
        this.$emit('addTodoItem',this.newTodoItem)
        this.clearInput()
      }
    },

    clearInput(){
      this.newTodoItem=''
    }
  }

}
</script>

<style scope>
input:focus{
  outline: none;
}
.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}
.addContainer{
  float: right;
  background: linear-gradient(to right,#6478FB,#8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color: white;
  vertical-align: 0 5px 5px 0;
}
</style>