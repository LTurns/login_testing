import TopHeader from '@/components/topHeader.vue'; 
import { shallowMount } from "@vue/test-utils"; 
import flushPromises from "flush-promises"; 
// this helps us flush promises out in case they don't finish and continue to run. 

const $router = {
 replace: jest.fn()
}

jest.mock("firebase/app", ()=> ({
 auth(){
  return {
   onAuthStateChange(fnc){
    return fnc(true);
   }, 
   signOut: () => Promise.resolve()
  }
 }
 // this is how you would mock firebase for authentication. 
}))

describe('topHeader.vue', () => {
 
 let wrapper;

 beforeEach(() => {
  wrapper = shallowMount(TopHeader, {
   mocks: {
    $router
    // you have a dollar sign for all values that are instances of vue - like data etc. We have replaced the router from the wrapper (component) to the new router function specified above. 
   }
   // methods: { setupFirebase: () => {} }
  })
 })

 it("renders", () => {
  expect(wrapper.exists()).toBe(true);
 })

 it("does h1 exist", () => {
  expect(wrapper.find("h1").text()).toBe("Logged in")
 })
 
 it("user is logged in after firebase mock", () => {
  expect(wrapper.vm.$data.loggedIn).toBe
  (true);
  // the vm is clever - it grabs the data of the object in question. You can use lots of syntax similar to these. 
 })

 it("on signout move route to correct place", async () => {
  wrapper.find("button").trigger("click");
  // this creates the click event. 
  await flushPromises();
  expect($router.replace).lastCalledWith({ name: "login"})

 })


})