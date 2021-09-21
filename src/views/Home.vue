<template>
  <div class="containerAba">
    <div class="container limitW">
      <FilterDisp 
        @matriz="mostrarM" 
        @filial="mostrarF"
        @cd="mostrarC"
        @jaguarao="mostrarJ"
      />
      <BgTable>
        <Disponivel>
          <DispMatriz v-if="showM"/>
          <DispFilial v-if="showF"/>
          <DispCd v-if="showC"/>
          <DispJaguarao v-if="showJ"/>
        </Disponivel>
      </BgTable>
    </div>
  </div>
</template>

<script>
import FilterDisp from '../components/Table/Filter/FilterDisp.vue'
import BgTable from '../components/Table/BgTable.vue'
import Disponivel from '../components/Table/Disponivel/Disponivel.vue'
import DispMatriz from '../components/Table/Disponivel/DispMatriz.vue'
import DispFilial from '../components/Table/Disponivel/DispFilial.vue'
import DispCd from '../components/Table/Disponivel/DispCd.vue'
import DispJaguarao from '../components/Table/Disponivel/DispJaguarao.vue'

export default {
  components: {
    FilterDisp,
    BgTable,
    Disponivel,
    DispMatriz,
    DispFilial,
    DispCd,
    DispJaguarao
  },
   data: () => {
    return {
        showM: true,
        showF: false,
        showC: false,
        showJ: false
     }
   },
  methods:{
    mostrarM: function(){
      this.showM = !this.showM
    },
    mostrarF: function(){
      this.showF = !this.showF
    },
    mostrarC: function(){
      this.showC = !this.showC
    }
    ,
    mostrarJ: function(){
      this.showJ = !this.showJ
    }
  }
}
</script>

<style scoped>
  .container{
    padding: 0 1rem;
  }
</style>
