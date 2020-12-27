<template>
<div class="inputBox shadow">
  <!--  v-on:keyup.enter='addTodo' 는 input에서 엔터쳤을때 실행 -->
  <input v-model="newTodoItem" v-on:keyup.enter='addTodo' >
  <span class="addContainer">
    <font-awesome-icon icon="plus" v-on:click='addTodo'/>
  </span>


  <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">경고 !
    <font-awesome-icon class="closeModalBtn" icon="times" v-on:click='showModal=false'/>
    </h3>
  </modal>


</div>
</template>

<script>

import Modal from './common/Modal.vue'

export default {
  data(){
    return {
      newTodoItem:'',
      showModal: false

    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem!==''){
        this.$emit('addTodoItem',this.newTodoItem)
        this.clearInput()
      }else{
        this.showModal = ! this.showModal //빈칸이면 modal 띄우기 
      }
    },

    clearInput(){
      this.newTodoItem=''
    }
  },
  components:{  
    Modal
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
  color: white;
  background: linear-gradient(to right,#6478FB,#8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color: white;
  vertical-align: 0 5px 5px 0;
}
.closeModalBtn{
  color: #ff0083;
}
</style>