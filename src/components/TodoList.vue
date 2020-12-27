<template>
  <div>
    <ul>
      <li v-for='(todoItem,index) in propsdata' v-bind:key='todoItem.item' class="shadow">
        
        <font-awesome-icon class="checkBtn" icon="check" 
        v-on:click='toggleComplete(todoItem,index)'
        v-bind:class='{checkBtnCompleted:todoItem.completed}'/>
        
        <span v-bind:class="{textCompleted:todoItem.completed}">
        {{todoItem.item}}
        </span>
      
        <span class="removeBtn" v-on:click='removeTodo(todoItem,index)' >
          <font-awesome-icon icon="trash-alt"/>
        </span>

      </li>
    </ul>
  </div>
</template>

<script>
export default {

  props:['propsdata'],

  methods: {

    //삭제 이벤트 보내기 
    removeTodo(todoItem,index) {
      this.$emit('removeTodo',todoItem,index)
    },

    //로컬스토리지는 update가 없어서, 제거+생성 
    toggleComplete(todoItem,index){
      this.$emit('toggleItem',todoItem,index)
    }
  },

};
</script>

<style scope>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  background: white;
  border-radius: 5px;
  align-items: center;
}

.removeBtn{
  margin-left: auto;
  color: #de4343;
  padding:1rem;

}
.checkBtn{
  line-height: 50px;
  color: #62acde;
  margin-right: 5px;
  padding:1rem;
}

.checkBtnCompleted{
  color: #b3adad;
}

.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}


</style>