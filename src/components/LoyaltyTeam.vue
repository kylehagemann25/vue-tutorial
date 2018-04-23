<template>
  <div class="loyalty-team">
    <img src="../assets/loyalty-logo.png">
    <h1>{{ team }}</h1>
    <ul id="teamMembers">
      <li v-for="member in members" :key="member">{{ member }}</li>
    </ul>
    <!-- Adds button to open Team modal -->
    <button id="show-modal" @click="showModal = true">Scanning Troubles?</button>
    <!-- use the modal component, pass in the prop -->
    <team-modal v-if="showModal" @close="showModal = false"></team-modal>
    <br>
    <router-link to="/" id="classTeams" class="nav-link">
    Back To Teams
    </router-link>
  </div>
</template>

<script>
// Imports Team Modal
import TeamModal from '@/components/TeamModal'

export default {
  name: 'LoyaltyTeam',
  components: { TeamModal },
  data () {
    return {
      showModal: false,
      team: '',
      members: ['Kyle', 'Saloni', 'Claire', 'Zibo', 'Justin', 'Sophia', 'Noah']
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
  color: #c70000;
}
/* Team Modal */
#show-modal {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 30px;
  border-radius: .25rem;
  background: #c70000;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: 0px;
  cursor: pointer;
}
#show-modal:hover, a:hover {
  color: #aaa;
}
</style>
