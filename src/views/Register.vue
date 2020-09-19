<template>
<div>
 register
 <div v-if="error" class="error">{{error.message}}</div>
 <form @submit.prevent="pressed">
  <!-- another way of doing prevent default for form on submit -->
  <div class="email">
   <input type="email" v-model="email" placeholder="email"/>
   <!-- this means we get an email from the user and bind it to the email in data. We will do the same for password. -->

   <div class="password">
    <input type="password" v-model="password" placeholder="password"/>
   </div>
  </div>
  <button type="submit">Register</button>
 </form>
 </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
 methods: {
  async pressed(){
   try {
    const user =  firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      
   // here we are passing in the email and password from v-model into the firebase auth. 

   console.log(user)

   this.$router.replace({name: "secret"});
   } catch(err){
    console.log(err)
   }
  }
 },
 data(){
  return {
   email: "", 
   password: "", 
   error: ""
  }
 }
}
</script>

<style scoped>
.error {
 color: red;
 font-size: 18px;
}
</style>