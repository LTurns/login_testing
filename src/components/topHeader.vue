<template>
 <div>
  <h1>Logged in</h1>
  <span v-if="loggedIn">Yes</span>
  <span v-else>No</span>

  <div>
   <button @click="signOut">Sign Out</button>
  </div>
 </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
 created(){
   this.setupFirebase();
 },
 methods: {
  setupFirebase() {
    firebase.auth().onAuthStateChanged(user => {
    if(user){
     this.loggedIn = true; 
    } else {
     this.loggedIn = false;
    }
   })
  },
  async signOut(){
   try {
  const data = await firebase.auth().signOut();
  console.log(data);
  this.$router.replace({ name: "login"})
   } catch(err){
    console.log(err)
   }
    
  }
 },
 data(){
  return {
   loggedIn: false
  }
 }
}
</script>

<style lang="scss">

</style>