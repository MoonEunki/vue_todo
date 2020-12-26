<template>
    <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click='clearTodo'>전체 삭제</span>
    </div>
</template>

<script>  
  export default {

  methods:{
    clearTodo(){
      this.$emit('clearAll') //인자는 필요없고 이벤트만 보냄 
    }
  },

}
</script>

<style scope>
.clearAllContainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color :#e20303;
  display: block;
}

</style>