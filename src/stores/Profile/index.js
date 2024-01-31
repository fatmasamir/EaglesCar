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
  let Brands = ref();
  let ImageProfile = ref();

  // is_waiting
  let is_waiting = ref(false);
  // is_waiting_verify
  let is_waiting_verify = ref(false);
  // is_waitingChangePassword
  let is_waitingChangePassword = ref(false);
  let AccountVerified = ref({
    title: "",
    transmission: "",
    brand: "",
    model: "",
    year: "",
    mileage: "",
    door: "",
    color: "",
    fuelType: "",
    seats: "",
    plate_number: "",
    expiration_date: "",
    short_description: "",
    license: "",
    insurance_yearly_cost: "",
    insurance_excess_value: "",
    identity_back: "",
    identity_face: "",
    Short_term: 0,
    long_term: 0,
    with_driver: 0,
    without_driver: 0,
  });
  // "title[en]": "",
  // "properties[transmission]": "",
  // "properties[brand]": "",
  // "properties[model]": "",
  // "properties[year]": "",
  // "properties[door]": "",
  // "properties[color]": "",
  // "properties[fuelType]": "",
  //Get profile
  async function get_profile() {
    const response = await callServer({
      url: "api/auth/profile",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Profile.value = data.data;
        if (Profile.value) {
          console.log(
            "Profile.value.user.image.original_url",
            Profile.value.user.image.original_url
          );
          ImageProfile.value = Profile.value.user.image.original_url;
        }
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
  //Get transmissions
  async function get_brands() {
    const response = await callServer({
      url: "api/brands",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Brands.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  // set_updateProfile
  async function set_updateProfile(data, ImageProfile) {
    is_waiting.value = true;
    console.log("ImageProfile", ImageProfile);
    const response = await callServer({
      url: "api/auth/profile",
      method: "POST",
      data,
      type: "",
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
      ImageProfile.value = ImageProfile;
      toast.success("Successfully  ... ");
      is_waiting.value = false;
    }
  }
  // set_ChangePassword
  async function set_ChangePassword(data) {
    is_waitingChangePassword.value = true;
    const response = await callServer({
      url: "api/auth/profile/change-password",
      method: "POST",
      data,
      auth: true,
    });
    if (!response.ok) {
      let errors = null;
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_waitingChangePassword.value = false;
      throw errors;
    } else {
      toast.success("Successfully  ... ");
      is_waitingChangePassword.value = false;
      get_profile();
    }
  }
  // profile_verify
  async function profile_verify(data) {
    is_waiting_verify.value = true;
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
      is_waiting_verify.value = false;
      throw errors;
    } else {
      toast.success("Successfully  ... ");
      is_waiting_verify.value = false;
    }
  }
  return {
    get_profile,
    Profile,
    set_updateProfile,
    get_countries,
    get_years,
    is_waiting,
    is_waiting_verify,
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
    Brands,
    get_brands,
    set_ChangePassword,
    is_waitingChangePassword,
    AccountVerified,
    ImageProfile,
  };
});
