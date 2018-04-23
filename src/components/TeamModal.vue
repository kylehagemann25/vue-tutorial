<template id="team-modal">
  <transition name="team-modal">
    <div class="team-modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <!-- Title in the modal -->
                <h3>Team Info</h3>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                  <img src="../assets/coffee.svg">
                  <p>Majority of members living off of caffeine</p>
                  <hr class="team-div">
                  <br>
                  <img src="../assets/paw.svg">
                  <p>Able to meet together faster than most pack animals</p>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <!-- Close button to return to default view -->
                <button class="modal-close-button" @click="$emit('close')">
                  Close
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// Exports the TeamModal component
export default {
  name: 'modal',
  template: '#team-modal'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Team Modal Info Styling */
.team-div {
  width: 25%;
  border-top: 5px solid #c70000;
  margin-top: 5px;
  margin-bottom: 15px;
  display: inline-block;
}
.team-modal i {
  color: #aaa;
  font-size: 35px;
}
.team-modal p:last-child {
  margin-bottom: 0px !important;
}
/* Team Modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: .25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
    border-bottom: 1px solid #aaa;
}
.modal-header h3 {
  margin: 0 auto;
  padding: 20px;
}
.modal-body {
  margin: 20px 0;
  padding: 10px 30px;
}
.modal-footer {
    padding: 0px;
    margin: 0px;
    border-top: 1px solid #aaa;
}
.modal-close-button {
    background: none;
    margin: 0 auto;
    text-decoration: none;
    font-weight: bold;
    padding: 20px;
    border: 0px;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
}
.modal-close-button:hover {
    color: red;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
img {
    height: 50px;
    width: 50px;
}
</style>
