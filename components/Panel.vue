<template>
  <div :class="['c-Panel', {'is-active': active}]">
    <div class="container">
      <span>Soybeans</span>
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
            <td><span class="[ val val--green ]">591</span></td>
          </tr>
          <tr>
            <td>Threonine</td>
            <td>1400</td>
            <td><span class="[ val val--green ]">1766</span></td>
          </tr>
          <tr>
            <td>Isoleucine</td>
            <td>1330</td>
            <td><span class="[ val val--green ]">1971</span></td>
          </tr>
          <tr>
            <td>Leucine</td>
            <td>2940</td>
            <td><span class="[ val val--green ]">3309</span></td>
          </tr>
          <tr>
            <td>Lysine</td>
            <td>2660</td>
            <td><span class="[ val val--green ]">2706</span></td>
          </tr>
          <tr>
            <td>Methionine</td>
            <td>1330</td>
            <td><span class="[ val val--yellow ]">547</span></td>
          </tr>
          <tr>
            <td>Phenylalanine</td>
            <td>2310</td>
            <td><span class="[ val val--green ]">2122</span></td>
          </tr>
          <tr>
            <td>Valine</td>
            <td>1680</td>
            <td><span class="[ val val--green ]">2029</span></td>
          </tr>
          <tr>
            <td>Histidine</td>
            <td>980</td>
            <td><span class="[ val val--green ]">1097</span></td>
          </tr>
          </tbody>
        </table>

    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$bus.$on('openPanel', (data) => {
      this.active = data
    })
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style>
.c-Panel {
  background-color: #00CC66;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  width: 100%;
  max-width: 50vw;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(calc(100% + 10px));
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
  border-bottom: 7px solid red;
}
</style>


