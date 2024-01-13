import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseProfile = defineStore("Profile", () => {
  let Profile = ref({});
  let Counteries = ref();
  let Years = ref();
  let Models = ref();
  let Colors = ref();
  let FuelTypes = ref();
  let Doors = ref();
  let Transmissions = ref();

  // is_waiting
  let is_waiting = ref(false);

  //Get profile
  async function get_profile() {
    const response = await callServer({
      url: "api/auth/profile",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Profile.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get countries
  async function get_countries() {
    const response = await callServer({
      url: "api/countries",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Counteries.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Years
  async function get_years() {
    const response = await callServer({
      url: "api/years",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Years.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Models
  async function get_models() {
    const response = await callServer({
      url: "api/models",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Models.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Colors
  async function get_colors() {
    const response = await callServer({
      url: "api/colors",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Colors.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get fuel-types
  async function get_fuel_types() {
    const response = await callServer({
      url: "api/fuel-types",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        FuelTypes.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get get_doors
  async function get_doors() {
    const response = await callServer({
      url: "api/doors",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Doors.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get transmissions
  async function get_transmissions() {
    const response = await callServer({
      url: "api/doors",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Transmissions.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  // set_updateProfile
  async function set_updateProfile(data) {
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/profile",
      method: "POST",
      data,
      auth: true,
    });
    if (!response.ok) {
      let errors = null;
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_waiting.value = false;
      throw errors;
    } else {
      toast.success("Successfully  ... ");
      is_waiting.value = false;
    }
  }
  // profile_verify
  async function profile_verify(data) {
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/profile/verify",
      method: "POST",
      type: "",
      auth: true,
      data,
    });
    if (!response.ok) {
      let errors = null;
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_waiting.value = false;
      throw errors;
    } else {
      toast.success("Successfully  ... ");
      is_waiting.value = false;
    }
  }
  return {
    get_profile,
    Profile,
    set_updateProfile,
    get_countries,
    get_years,
    is_waiting,
    Counteries,
    Years,
    profile_verify,
    Models,
    get_models,
    Colors,
    get_colors,
    get_fuel_types,
    FuelTypes,
    Doors,
    get_doors,
    Transmissions,
    get_transmissions,
  };
});
