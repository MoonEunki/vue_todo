<template>
<div class="inputBox shadow">

  <input v-model="newTodoItem" v-on:keyup.enter='addTodo' >
  <span class="addContainer">
    <font-awesome-icon icon="plus" v-on:click='addTodo'/>
  </span>

  <modal v-if="showModal" @close="showModal = false">
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
        this.$store.commit('addOneItem',this.newTodoItem)
        this.clearInput()
      }else{
        this.showModal = ! this.showModal 
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