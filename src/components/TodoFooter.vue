<template>
    <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click='clearTodo'>전체 삭제</span>
    </div>
</template>

<script>  
import {mapMutations} from 'vuex'

  export default {

  methods:{
    ...mapMutations({
      clearTodo:'clearAll'
    })
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