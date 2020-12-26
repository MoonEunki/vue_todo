<template>
  <div>
    <ul>
      <li v-for='todoItem in todoItems' v-bind:key='todoItem'>
        {{todoItem}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      todoItems:[]
    }
  },
  
  //생성되는시점에 실행되는 라이프사이클
  created(){
    if(localStorage.length>0){
      for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        this.todoItems.push(key)
}


}
  }

}
</script>

<style scope>

</style>