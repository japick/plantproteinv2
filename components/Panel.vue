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
            <td>350</td>
            <td><span class="[ val val--green ]">{{profile[0]}}</span></td>
          </tr>
          <tr>
            <td>Threonine</td>
            <td>1400</td>
            <td><span class="[ val val--green ]">{{profile[1]}}</span></td>
          </tr>
          <tr>
            <td>Isoleucine</td>
            <td>1330</td>
            <td><span class="[ val val--green ]">{{profile[2]}}</span></td>
          </tr>
          <tr>
            <td>Leucine</td>
            <td>2940</td>
            <td><span class="[ val val--green ]">{{profile[3]}}</span></td>
          </tr>
          <tr>
            <td>Lysine</td>
            <td>2660</td>
            <td><span class="[ val val--green ]">{{profile[4]}}</span></td>
          </tr>
          <tr>
            <td>Methionine</td>
            <td>1330</td>
            <td><span class="[ val val--yellow ]">{{profile[5]}}</span></td>
          </tr>
          <tr>
            <td>Phenylalanine</td>
            <td>2310</td>
            <td><span class="[ val val--green ]">{{profile[6]}}</span></td>
          </tr>
          <tr>
            <td>Valine</td>
            <td>1680</td>
            <td><span class="[ val val--green ]">{{profile[7]}}</span></td>
          </tr>
          <tr>
            <td>Histidine</td>
            <td>980</td>
            <td><span class="[ val val--green ]">{{profile[8]}}</span></td>
          </tr>
          </tbody>
        </table>

        <div>
          {{profile[5]}}
          <span v-if="profile[5] >= (1330 * 0.666)" class="val val--green"></span>
          <span v-else-if="profile[5] < (1330 * 0.666) && profile[5] > (1300 * 0.333)" class="val val--yellow"></span>
          <span v-else class="val val--red"></span>
        </div>

        
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
  data() {
    return {
      profile: false,
      food: null,
      active: false
    }
  }
}
</script>

<style>
.c-Panel {
  background-color: #00CC66;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  width: 100%;
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


