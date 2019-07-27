<template>
  <div class="c-Panel">
    <div class="container">
      <span>Soybeans</span>
    </div>
    <div class="container">
      <span class="grid__heading">Amino acid profile</span>
      <table cellpadding="0" border-collapse="collapse" border-spacing="0">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td><strong>RDA for 70kg person</strong></td>
            <td><strong>mg per 100g serving</strong></td>
          </tr>
          <tr>
            <td>Tryptophan</td>
            <td>350</td>
            <td>591</td>
          </tr>
          <tr>
            <td>Threonine</td>
            <td>1400</td>
            <td>1766</td>
          </tr>
          <tr>
            <td>Isoleucine</td>
            <td>1330</td>
            <td>1971</td>
          </tr>
          <tr>
            <td>Leucine</td>
            <td>2940</td>
            <td>3309</td>
          </tr>
          <tr>
            <td>Lysine</td>
            <td>2660</td>
            <td>2706</td>
          </tr>
          <tr>
            <td>Methionine</td>
            <td>1330</td>
            <td>547</td>
          </tr>
          <tr>
            <td>Phenylalanine</td>
            <td>2310</td>
            <td>2122</td>
          </tr>
          <tr>
            <td>Valine</td>
            <td>1680</td>
            <td>2029</td>
          </tr>
          <tr>
            <td>Histidine</td>
            <td>980</td>
            <td>1097</td>
          </tr>
          </tbody>
        </table>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  transition: 
    transform .4s cubic-bezier(0.42, 0, 0.34, 1.01), 
    -webkit-transform 0.4s cubic-bezier(0.42, 0, 0.34, 1.01);
}

table {
  background-color: #0ca551;
  border-radius: 4px;
  color: #fff;
  text-shadow: 1px 1px 0px #0a8f46;
  border-collapse: collapse;
}

td {
  width: 33.33%;
  padding: 10px;
}
</style>


