import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseCars = defineStore("Cars", () => {
  let Cars = ref([]);
  let CarsUser = ref([]);
  let CarsConfirmed = ref([]);
  let Car = ref({});
  let unfounedCars = ref(false);
  let is_waitingSend = ref(false);
  //Get Bloges
  async function get_Cars() {
    const response = await callServer({
      url: "api/cars",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Cars.value = data.data;
        if (Cars.value.length == 0) {
          unfounedCars.value = true;
        }
        console.log("Bloges.value", Cars.value);
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Bloges
  async function get_user_Cars() {
    const response = await callServer({
      url: "api/user/cars",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        CarsUser.value = data.data;
        if (CarsUser.value.length == 0) {
          unfounedCars.value = true;
        }
        console.log("Bloges.value", Cars.value);
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Bloges
  async function get_Cars_confirmed() {
    const response = await callServer({
      url: "api/user/cars/confirmed",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        CarsConfirmed.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Bloge
  async function get_Car(slug) {
    const response = await callServer({
      url: "api/cars/" + slug,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Car.value = data.data;
        console.log("Car.value", Car.value);
      });
    } else {
      toast.error("Has Error");
    }
  }

  // sendRequest
  async function sendRequest(data, id) {
    is_waitingSend.value = true;
    const response = await callServer({
      url: "api/user/cars/" + id + "/send-request/",
      method: "POST",
      data,
      auth: true,
    });

    if (response.ok) {
      response.json().then(async (res) => {
        is_waitingSend.value = false;
        toast.success("Successfully Send Reuest... ");
      });
    } else {
      is_waitingSend.value = false;
      response.json().then((data) => {
        for (let key in data.errors) {
          toast.error(data.errors[key][0]);
        }
      });
    }
  }
  return {
    get_Cars,
    Cars,
    get_Car,
    get_user_Cars,
    Car,
    unfounedCars,
    is_waitingSend,
    sendRequest,
    CarsConfirmed,
    get_Cars_confirmed,
    CarsUser,
  };
});
