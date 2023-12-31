import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseCars = defineStore("Cars", () => {
  let Cars = ref([]);
  let Car = ref({});
  let unfounedCars = ref(false);

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

  return {
    get_Cars,
    Cars,
    get_Car,
    Car,
    unfounedCars,
  };
});
