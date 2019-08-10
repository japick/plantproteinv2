<template>
  <div :class="['c-Panel', {'is-active': active}]">
    <div class="container">
      <span>{{food}}</span>
    </div>
    <div class="container">
      <span class="grid__heading">Amino acid profile</span>
      <table cellpadding="0" border-collapse="collapse" border-spacing="0">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td><strong>RDA for 70kg person <small>*</small></strong></td>
            <td><strong>mg per 100g serving <small>**</small></strong></td>
          </tr>
          <tr>
            <td>Tryptophan</td>
            <td>{{amino_acid.tryptophan}}</td>
            <td><span :class="['val', rating(amino_acid.tryptophan, profile[0])]">{{profile[0]}}</span></td>
          </tr>
          <tr>
            <td>Threonine</td>
            <td>{{amino_acid.threonine}}</td>
            <td><span :class="['val', rating(amino_acid.threonine, profile[1])]">{{profile[1]}}</span></td>
          </tr>
          <tr>
            <td>Isoleucine</td>
            <td>{{amino_acid.isoleucine}}</td>
            <td><span :class="['val', rating(amino_acid.isoleucine, profile[2])]">{{profile[2]}}</span></td>
          </tr>
          <tr>
            <td>Leucine</td>
            <td>{{amino_acid.leucine}}</td>
            <td><span :class="['val', rating(amino_acid.leucine, profile[3])]">{{profile[3]}}</span></td>
          </tr>
          <tr>
            <td>Lysine</td>
            <td>{{amino_acid.lysine}}</td>
            <td><span :class="['val', rating(amino_acid.lysine, profile[4])]">{{profile[4]}}</span></td>
          </tr>
          <tr>
            <td>Methionine</td>
            <td>{{amino_acid.methionine}}</td>
            <td><span :class="['val', rating(amino_acid.methionine, profile[5])]">{{profile[5]}}</span></td>
          </tr>
          <tr>
            <td>Phenylalanine</td>
            <td>{{amino_acid.phenylalanine}}</td>
            <td><span :class="['val', rating(amino_acid.phenylalanine, profile[6])]">{{profile[6]}}</span></td>
          </tr>
          <tr>
            <td>Valine</td>
            <td>{{amino_acid.valine}}</td>
            <td><span :class="['val', rating(amino_acid.valine, profile[7])]">{{profile[7]}}</span></td>
          </tr>
          <tr>
            <td>Histidine</td>
            <td>{{amino_acid.histidine}}</td>
            <td><span :class="['val', rating(amino_acid.histidine, profile[8])]">{{profile[8]}}</span></td>
          </tr>
          </tbody>
        </table>
        
          <!-- - If value is greater than or equal to two thirds = green
          - If value is less than two thirds but greater than one third = yellow 
          - If value is less than or equal to one third = red  -->
        

    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$bus.$on('openPanel', (data) => {
      this.profile = data.profile
      this.food = data.food
      this.active = true
    }),
    this.$bus.$on('closePanel', () => {
      this.active = false
    })
  },
  methods: {
    rating(base, val) {
      if (val >= (base * 0.666))
        return 'val--green'
      else if (val < (base * 0.666) && val > (base * 0.333))
        return 'val--yellow'
      else
        return 'val--red'
    }
  },
  data() {
    return {
      profile: false,
      food: null,
      active: false,
      amino_acid: {
        tryptophan: 350,
        threonine: 1400,
        isoleucine: 1330,
        leucine: 2940,
        lysine: 2660,
        methionine: 1330,
        phenylalanine: 2310,
        valine: 1680,
        histidine: 980
      }
    }
  }
}
</script>

<style>
.c-Panel {
  background-color: #00CC66;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  width: 90%;
  max-width: 650px;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(670px);
  transition: 
    transform .5s cubic-bezier(0.42, 0, 0.34, 1.01), 
    -webkit-transform 0.5s cubic-bezier(0.42, 0, 0.34, 1.01);
}

.c-Panel.is-active {
  transform: translateX(0);
}

table {
  background-color: #0ca551;
  border-radius: 4px;
  color: #fff;
  text-shadow: 1px 1px 0px #0a8f46;
  border-collapse: collapse;
  width: 100%;
}

td {
  width: 33.33%;
  padding: 10px;
}

.val {
  display: inline-flex;
  align-items: center;
}

.val:after {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 7px;
}

.val--green:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 7px solid lime;
}

.val--yellow:after {
  border-top: 4px solid transparent;
  border-right: 7px solid yellow;
  border-bottom: 4px solid transparent;
}

.val--red:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 7px solid red;
}
</style>
