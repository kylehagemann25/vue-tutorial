<template>
  <div class="tutorial">
    <img src="../assets/logo.png">
    <h1>Welcome to our CS506 Tutorial on Vue JS</h1>
    <h1>Check out some information on our Team</h1>
    <ul>
      <li class="nav-item">
        <router-link to="/LoyaltyTeam" id="loyaltyTeam" class="nav-link">
          {{ team }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ClassTeams',
  data () {
    return {
      team: ''
    }
  },
  methods: {
    getData: function () {
      this.team = this.$root.$data.team
    }
  },
  beforeMount () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
