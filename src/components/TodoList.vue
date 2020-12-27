<template>
  <div>
    <ul>
      <li v-for='(todoItem,index) in this.storedTodoItems' v-bind:key='todoItem.item' class="shadow">
        
        <font-awesome-icon class="checkBtn" icon="check" 
        v-on:click='toggleComplete({todoItem,index})'
        v-bind:class='{checkBtnCompleted:todoItem.completed}'/>
        
        <span v-bind:class="{textCompleted:todoItem.completed}">
        {{todoItem.item}}
        </span>
      
        <span class="removeBtn" v-on:click='removeTodo({todoItem,index})' >
          <font-awesome-icon icon="trash-alt"/>
        </span>

      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo:'removeOneItem', //{todoItem,index} 안해도됨,
      toggleComplete:'toggleOneItem' 
    }),
  },

  computed:{
    ...mapGetters(['storedTodoItems'])
  }

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