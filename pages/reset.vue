<template>
    <div class="root-container bg-dark">
      <div class="form-section">
        <p class="text-white">{{message}}</p>
        <b-form-group
          id="fieldset-1"
          description=""
          label="The occasion you're eagerly waiting for"
          label-for="input-1"
          class="text-white"
        >
          <b-form-input class="bg-grey text-white" id="input-1" type="text" v-model="eventName" trim></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          description=""
          label="Since"
          label-for="input-1"
          class="text-white"
        >
          <b-form-input class="bg-grey text-white" type="date" id="input-1" v-model="startDate" trim></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          description=""
          label="And, this event comes around on"
          label-for="input-1"
          class="text-white"
        >
          <b-form-input class="bg-grey text-white" type="date" id="input-1" v-model="eventDate" trim></b-form-input>
        </b-form-group>
        <button type="submit" @click.stop.prevent="submit()" class="btn bg-grey mt-3 text-white">Save</button>
      </div>
    </div>
  </template>

<style scoped>
  .bg-dark {
    background-color: black !important;
  }
  .root-container {
    min-height: 100vh;
    padding-top: 10%;
    /* background-color: yellow; */
  }
  .form-section {
    background-color: #191818;
    margin: auto;
    padding: 3%;
    border-radius: 10px;
  }

.bg-grey {
  background-color: #494f56;
  border: #494f56;
}

@media (min-width: 992px) {
  .form-section{
      max-width: 30%;
  }
}
@media (max-width: 992px) {
  .form-section{
      max-width: 85%;
      justify-content: center;
      padding: 5%;
      margin: auto;
  }
}
</style>
  
  <script>
  export default {
    name: 'ResetPage',
    data() {
      return {
        calculated: false,
        eventName: '',
        startDate: '',
        eventDate: '',
        no_of_days: 0,
        message: ''
      }
    },
    methods: {
      submit() {
        if (!this.eventDate && !this.startDate && !this.eventName){
          this.message = "Please fill in all the fields!"
          return
        }
        this.$store.commit('addEventDate', this.eventDate)
        this.$store.commit('addStartDate', this.startDate)
        this.$store.commit('addEventName', this.eventName)
        this.$router.push('/')
      }
    },
  }
  </script>
  