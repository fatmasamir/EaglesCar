<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import type { Link } from "./interface";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "../../../stores/auth";
import MainButton from "../Buttons/MainButton/MainButton.vue";
import NiceModal from "@/components/global/Modals/NiceModal/NiceModel.vue";
import ModalDynamic from "@/components/FormSales/ModalDynamic.vue";
import type Forms from "../register/interface/forms";
import LinksNavMobile from "@/components/pages/dashboard/navs/linksNav/LinksNavMobile.vue";
import { useLang } from "@/stores/lang";
import SimpleInput from "../CusomInputs/SimpleInput/SimpleInput.vue";
import NiceDrop from "@/components/pages/dashboard/navs/linksNav/classes/niceDrop";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import router from "@/router";

const Language = useLang();
const i18n = useI18n();

// i18n.locale.value = Language.lang;
const authStore = useAuthStore();
const profileLinks = ref<Link[]>([
  {
    id: 1,
    name: "Home",
    title: "لوحة التحكم",
    icon: "static",
  },
]);
// i18n
const { t } = useI18n();
const search = ref(false);
const posModal = ref(false);
const isOpen = ref(false);
// profile list
const noti_list = ref(false);
const profile_list = ref(false);
const noti_list_ele = ref(null);
const profile_list_ele = ref(null);
const profile_list_button = ref(null);
const noti_list_button = ref(null);

function changeProfileList() {
  profile_list.value = !profile_list.value;
}
function changeNotiList() {
  noti_list.value = !noti_list.value;
  console.log(noti_list.value);
}
const Closing = () => {
  posModal.value = false;
};
// log out
// const logoutModalStatue = ref(false);

// function changeLogoutModalStatue() {
//   logoutModalStatue.value = !logoutModalStatue.value;
// }
const logOut = () => {
  // logoutModalStatue.value = false;
  // store.dispatch("register/logOut");
  // closeNav();
  authStore.is_waiting = true;
  setTimeout(() => {
    authStore.logOut();
    authStore.is_auth = false;
    window.location.replace("/");
  }, 1000);
};

// open form
function openForm(target: Forms) {
  authStore.changeForm(target);
  authStore.changeFormStatus(true);
}
// maximize window
// check fullscreen
const getFullScreen = () => {
  return document.fullscreenElement;
};
const maximizeWindow = () => {
  if (getFullScreen()) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
    });
  }
};
// handel lang
const target_lang = ref();
if (localStorage.getItem("lang") == "en") target_lang.value = "ar";
else target_lang.value = "en";
const changeLang = () => {
  window.location.reload();
  localStorage.setItem("lang", target_lang.value);
  // i18n.locale.value = localStorage.getItem("lang");
  if (target_lang.value == "ar") {
    target_lang.value = "en";
  } else {
    target_lang.value = "ar";
  }
  Language.changeLayout();
};
const redirectTo = () => {
  router.push({ name: "pointsSale" });
};
const icons = {
  maxmize: new URL(`./icons/maximize.svg`, import.meta.url).href,
  notifications: new URL(`./icons/notification.svg`, import.meta.url).href,
  global: new URL(`./icons/global.svg`, import.meta.url).href,
};

onMounted(() => {
  // Language.changeLayout();
  let dropList = document.querySelectorAll(".links-nav ul li.dropDown");
  dropList.forEach((ele) => {
    let list = new NiceDrop(ele as HTMLLIElement);
  });
  // responsive navbar
  let navOpen = document.querySelector("#navbar .navbar-mobile") as HTMLElement,
    navClose = document.querySelector(
      "#navbar .all-links .profile-mobile .profile"
    ) as HTMLElement,
    allLinks = document.querySelector(".all-links") as HTMLElement;
  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      isOpen.value = true;
    }
    if (window.innerWidth > 1200) {
      isOpen.value = false;
      allLinks.style.transform = "translateX(100%)";
      setTimeout(() => {
        allLinks.classList.remove("open");

        allLinks.style.transform = "translateX(0)";
      }, 300);
    }
    console.log(isOpen.value);
  };
  window.addEventListener("resize", handleResize);
  navOpen.addEventListener("click", () => {
    if (isOpen.value) {
      allLinks.classList.add("open");
      allLinks.style.transform = "translateX(100%)";
      setTimeout(() => {
        allLinks.style.transform = "translateX(0)";
      }, 0);
    }
  });
  navClose.addEventListener("click", () => {
    allLinks.style.transform = "translateX(100%)";
    setTimeout(() => {
      allLinks.classList.remove("open");

      allLinks.style.transform = "translateX(0)";
    }, 300);
  });
  // add all in more items in drop down
  // let moreItems = document.querySelectorAll(
  //         "nav#navbar .content .all-links .categories ul li.in-more"
  //     ),
  //     dropDownList = document.querySelector(
  //         "nav#navbar .content .all-links .categories ul li.more .drop-down"
  //     );

  // moreItems.forEach((item) => {
  //     console.log(item);
  //     let li = document.createElement("li");
  //     li.innerHTML = item.innerHTML;
  //     dropDownList.appendChild(li);
  // });
  // more button
  // let moreButton = document.querySelector(
  //     "nav#navbar .content .all-links .categories ul li.more"
  // );
  // moreButton.addEventListener("click", () => {
  //     if (!moreButton.classList.contains("open")) {
  //         moreButton.classList.add("open");
  //         setTimeout(() => {
  //             moreButton.children[1].style.opacity = 1;
  //         }, 0);
  //     } else {
  //         moreButton.children[1].style.opacity = 0;
  //         setTimeout(() => {
  //             moreButton.classList.remove("open");
  //         }, 300);
  //     }
  // });

  document.addEventListener("click", (e) => {
    if (profile_list.value == true && !e.target!.closest(".profile")) {
      changeProfileList();
    }
    if (noti_list.value == true && !e.target!.closest(".notifications")) {
      changeNotiList();
    }
  });
});
</script>

<template>
  <nav id="navbar">
    <section class="container-fluid">
      <section class="content">
        <section class="logo-parent">
          <section class="logo">
            <a href="https://arabpik.com/">
              <img
                src="@/assets/images/global/Logos/logo.svg"
                alt="عرب بك - Arabpik"
              />
            </a>
          </section>
        </section>

        <!-- navbar mobile -->
        <section class="navbar-mobile">
          <button class="nav-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
            >
              <g id="fi-rr-menu-burger" transform="translate(0 -4)">
                <rect
                  id="Rectangle_1712"
                  data-name="Rectangle 1712"
                  width="24"
                  height="2"
                  rx="1"
                  transform="translate(0 11)"
                  fill="#4a4a4a"
                />
                <rect
                  id="Rectangle_1713"
                  data-name="Rectangle 1713"
                  width="24"
                  height="2"
                  rx="1"
                  transform="translate(0 4)"
                  fill="#4a4a4a"
                />
                <rect
                  id="Rectangle_1714"
                  data-name="Rectangle 1714"
                  width="24"
                  height="2"
                  rx="1"
                  transform="translate(0 18)"
                  fill="#4a4a4a"
                />
              </g>
            </svg>
          </button>
        </section>
        <!-- all links -->
        <section class="all-links">
          <div class="profile-mobile mt-3" v-if="true">
            <div class="profile">
              <button class="close-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_9926"
                    data-name="Group 9926"
                    transform="translate(-333 -54)"
                  >
                    <path
                      id="fi-rr-cross-small"
                      d="M17.429,5.986h0a.954.954,0,0,0-1.348,0l-4.373,4.373L7.335,5.986a.954.954,0,0,0-1.348,0h0a.954.954,0,0,0,0,1.348l4.373,4.373L5.986,16.08a.954.954,0,0,0,0,1.348h0a.954.954,0,0,0,1.348,0l4.373-4.373,4.373,4.373a.954.954,0,0,0,1.348,0h0a.954.954,0,0,0,0-1.348l-4.373-4.373,4.373-4.373A.954.954,0,0,0,17.429,5.986Z"
                      transform="translate(333.293 54.293)"
                      fill="#000"
                    />
                    <g
                      id="Rectangle_13299"
                      data-name="Rectangle 13299"
                      transform="translate(333 54)"
                      fill="none"
                      stroke="#000"
                      stroke-width="1.5"
                    >
                      <rect width="24" height="24" rx="6" stroke="none" />
                      <rect
                        x="0.75"
                        y="0.75"
                        width="22.5"
                        height="22.5"
                        rx="5.25"
                        fill="none"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <img
                :src="
                  authStore.user
                    ? authStore.user?.avatar
                    : '/src/assets/images/global/Logos/user.png'
                "
              />
              <h6>
                مرحبا بك
                <span>{{
                  authStore.user?.name ? authStore.user?.name : "عرب بيك"
                }}</span>
              </h6>
              <div
                class="buttons d-flex justify-content-between align-items-center"
              >
                <button class="pos" @click="redirectTo">POS</button>
                <button id="maxmize" @click="maximizeWindow">
                  <InlineSvg :src="icons.maxmize" />
                </button>
                <div class="notifications">
                  <div class="" @click="changeNotiList">
                    <button id="notifications" ref="noti_list_button">
                      <InlineSvg :src="icons.notifications" />
                    </button>
                  </div>
                  <transition name="fade">
                    <section
                      class="profile-list"
                      v-if="noti_list"
                      ref="noti_list_ele"
                    ></section>
                  </transition>
                </div>
                <button id="change_lang" @click="changeLang">
                  <InlineSvg :src="icons.global" />
                </button>
              </div>
              <button class="sign_out" @click="authStore.logOut()">
                <section class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="Group_10721"
                      data-name="Group 10721"
                      transform="translate(3057 -4073)"
                    >
                      <rect
                        id="Rectangle_13965"
                        data-name="Rectangle 13965"
                        width="24"
                        height="24"
                        transform="translate(-3057 4073)"
                        fill="none"
                      />
                      <g id="sign-out-alt" transform="translate(-3057 4073)">
                        <path
                          id="Path_11739"
                          data-name="Path 11739"
                          d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"
                          fill="#161616"
                        />
                        <path
                          id="Path_11740"
                          data-name="Path 11740"
                          d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586a3,3,0,0,0,0-4.242Z"
                          fill="#161616"
                        />
                      </g>
                    </g>
                  </svg>
                </section>
                <section class="title">
                  <span>تسجيل خروج</span>
                </section>
              </button>
            </div>
            <div class="links-mobile mt-3">
              <LinksNavMobile></LinksNavMobile>
            </div>
          </div>
          <section class="links">
            <ul>
              <!-- en -->
              <li>
                <button class="pos" @click="redirectTo">POS</button>
                <div class="list_popups">
                  <ModalDynamic v-show="posModal" @cancel="Closing()">
                    <template #modalHeader
                      >{{ t("financial_record") }}
                    </template>
                    <div class="row">
                      <div class="col-md-12">
                        <p>{{ t("Field_labels_marked_input_fields") }}</p>
                      </div>
                      <div class="col-md-12 mb-3">
                        <SimpleInput>
                          <label>
                            {{ t("storehouse") }}
                            <span class="text-red">*</span>
                          </label>
                          <select class="form-select mt-2">
                            <option disabled selected>
                              {{ t("everyone") }}
                            </option>
                          </select>
                        </SimpleInput>
                      </div>
                      <div class="col-md-12 mb-3">
                        <SimpleInput>
                          <label>
                            {{ t("hand_money") }}
                            <span class="text-red">*</span>
                          </label>
                          <input type="text" placeholder="0.00" />
                        </SimpleInput>
                      </div>
                      <div class="col-md-2 mb-3">
                        <SimpleButton type="start">
                          <button>{{ t("submit") }}</button>
                        </SimpleButton>
                      </div>
                    </div>
                  </ModalDynamic>
                </div>
              </li>
              <li>
                <button id="maxmize" @click="maximizeWindow">
                  <InlineSvg :src="icons.maxmize" />
                </button>
              </li>
              <li>
                <div class="notifications">
                  <div class="" @click="changeNotiList">
                    <button id="notifications" ref="noti_list_button">
                      <InlineSvg :src="icons.notifications" />
                    </button>
                  </div>
                  <transition name="fade">
                    <section
                      class="profile-list"
                      v-if="noti_list"
                      ref="noti_list_ele"
                    ></section>
                  </transition>
                </div>
              </li>
              <li>
                <button id="change_lang" @click="changeLang">
                  <InlineSvg :src="icons.global" />
                </button>
              </li>

              <li class="profile">
                <div
                  class="profile__button d-flex align-items-center"
                  @click="changeProfileList"
                >
                  <button ref="profile_list_button">
                    <img
                      :src="
                        authStore.user
                          ? authStore.user?.avatar
                          : '/src/assets/images/global/Logos/user.png'
                      "
                    />
                  </button>
                  <h6>
                    مرحبا بك
                    <span>{{
                      authStore.user?.name ? authStore.user?.name : "عرب بيك"
                    }}</span>
                  </h6>
                  <InlineSvg src="/images/global/icons/global/arrow.svg" />
                </div>
                <transition name="fade">
                  <section
                    class="profile-list"
                    v-if="profile_list"
                    ref="profile_list_ele"
                  >
                    <section class="info">
                      <section class="image">
                        <img
                          :src="
                            authStore.user
                              ? authStore.user?.avatar
                              : '/src/assets/images/global/Logos/user.png'
                          "
                        />
                      </section>
                      <section class="data">
                        <h4>
                          {{
                            authStore.user ? authStore.user?.name : "عرب بيك"
                          }}
                        </h4>
                        <span
                          >@{{
                            authStore.user
                              ? authStore.user?.username
                              : "arabpik"
                          }}</span
                        >
                      </section>
                    </section>
                    <section class="links-list">
                      <ul>
                        <li v-for="link in profileLinks" :key="link.id">
                          <RouterLink
                            :to="{
                              name: link.name,
                            }"
                          >
                            <InlineSvg
                              :src="`/images/global/icons/nav/${link.icon}.svg`"
                            />

                            {{ link.title }}
                          </RouterLink>
                        </li>
                        <li>
                          <button @click="logOut">
                            <section class="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  id="Group_10721"
                                  data-name="Group 10721"
                                  transform="translate(3057 -4073)"
                                >
                                  <rect
                                    id="Rectangle_13965"
                                    data-name="Rectangle 13965"
                                    width="24"
                                    height="24"
                                    transform="translate(-3057 4073)"
                                    fill="none"
                                  />
                                  <g
                                    id="sign-out-alt"
                                    transform="translate(-3057 4073)"
                                  >
                                    <path
                                      id="Path_11739"
                                      data-name="Path 11739"
                                      d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"
                                      fill="#161616"
                                    />
                                    <path
                                      id="Path_11740"
                                      data-name="Path 11740"
                                      d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586a3,3,0,0,0,0-4.242Z"
                                      fill="#161616"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </section>
                            <section class="title">
                              <span>تسجيل خروج</span>
                            </section>
                          </button>
                        </li>
                      </ul>
                    </section>
                  </section>
                </transition>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  </nav>
</template>

<style lang="scss">
@import "../../../assets/scss/_variables.scss";
@import "../../../assets/scss/_functions.scss";
nav {
  &#navbar {
    width: 100%;
    background: var(--white-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    padding-top: 0;
    padding-bottom: 0;
    @include mainBoxShadow();
    .content {
      display: flex;
      height: 70px;
      .logo-parent {
        display: flex;
        .logo {
          width: 100px;
          height: 100%;
          margin: {
            right: 20px;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            width: 100%;
            display: flex;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
      .navbar-mobile {
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        display: none;
        @media screen and (max-width: map-get($grid, xl)) {
          display: flex;
        }
        button {
          all: unset;
          display: flex;
          svg {
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
        }
      }
      .all-links {
        display: flex;
        justify-content: end;
        width: 100%;
        @media screen and (max-width: map-get($grid, xl)) {
          display: none;
          justify-content: start;
          transition: var(--main-transition);
        }
        .mobile-header {
          display: none;
        }
        .profile-mobile {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: none;
          @media screen and (max-width: map-get($grid, xl)) {
            display: flex;
            flex-direction: column;
          }
          .close-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background: transparent;
            border: none;
          }
          a {
            margin: {
              bottom: 10px;
            }
          }
          .profile {
            background: var(--white-color) !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            padding: 10px 0;
            img {
              width: 10vw;
              height: 10vw;
              border-radius: 50%;
              margin: 10px;
            }
            h6 {
              font-size: 3vw;
            }
            button {
              color: #202020 !important;
              .title {
                span {
                  font-size: 2.4vw !important;
                }
              }
              .icon {
                svg {
                  width: 20px !important;
                  path {
                    fill: #202020 !important;
                  }
                }
              }
            }
            .buttons {
              width: 50vw;
              button {
                text-align: center;
                color: #fff !important;
                border: none;
                padding: 10px;
                border-radius: 8px;
                background: transparent;
                &.pos {
                  background: var(--first-color);
                  padding: 10px 25px;
                }
                svg {
                  path {
                    fill: #202020 !important;
                  }
                }
              }
            }
            .sign_out {
              border: none;
              background: transparent;
              display: flex;
              .icon {
                margin: 0 5px;
              }
            }
          }
          .links-mobile {
            height: calc(100vh - 290px);
            overflow-y: scroll;
            .links-nav {
              position: relative;
              @media screen and (max-width: map-get($grid, lg)) {
                display: block;
              }
            }
          }
        }
        &.open {
          background-color: #202020;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 10px 20px;
          overflow-y: scroll;
          transition: var(--main-transition);
          z-index: 999999999999999;
          &::-webkit-scrollbar {
            width: 5px;
          }

          &::-webkit-scrollbar-track {
            box-shadow: none;
          }

          &::-webkit-scrollbar-thumb {
            background-color: var(--first-color);
            outline: 1px solid transparent;
          }
          .mobile-header {
            display: flex;
            position: relative;
            .logo-parent {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              .logo {
                width: 100px;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
            }
            .close {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              button {
                all: unset;
                cursor: pointer;
              }
            }
          }
          .categories,
          .links {
            width: 100%;
            ul {
              width: 100%;
              flex-direction: column;
              li {
                width: 100%;
                margin: {
                  left: 0 !important;
                  right: 0 !important;
                }
                &:not(:last-of-type) {
                  margin: {
                    bottom: 10px;
                  }
                }
                a,
                button {
                  // width: 100%;
                  background: none;
                  color: var(--white-color);
                  // justify-content: flex-start;
                  svg {
                    path {
                      fill: var(--white-color) !important;
                    }
                  }
                }
              }
            }
          }
          .categories {
            border-bottom: 1px solid #545454;
            padding: {
              bottom: 20px;
            }
            &.notAuth {
              @media screen and (max-width: map-get($grid, lg)) {
                margin: {
                  top: calc(40.5px + 20px);
                }
              }
              @media screen and (max-width: map-get($grid, md)) {
                margin: {
                  top: calc(76px + 30px);
                }
              }
            }
          }
          .links {
            padding: {
              top: calc(20px - 8px);
            }
            ul {
              li {
                button {
                  // width: 100%;
                  color: var(--white-color);
                  justify-content: center;
                  &.pos {
                    background: var(--first-color);
                  }
                  svg {
                    path {
                      fill: var(--white-color) !important;
                    }
                  }
                }
              }

              .register {
                display: flex;
                justify-content: space-between;
                @media screen and (max-width: map-get($grid, lg)) {
                  position: absolute;
                  top: calc(100px + 10px);
                  left: 0;
                  padding: 0 20px;
                }
                @media screen and (max-width: map-get($grid, md)) {
                  flex-direction: column;
                }
                .log-in,
                .sign-in {
                  width: 49%;
                  display: flex;
                  @media screen and (max-width: map-get($grid, md)) {
                    width: 100%;
                    margin: {
                      bottom: 10px;
                    }
                  }
                  button {
                    justify-content: center;
                    align-items: center;
                  }
                }
                .log-in {
                  button {
                    background: var(--white-color);
                    color: var(--first-text-color);
                  }
                }
                .sign-in {
                  button {
                    background: var(--first-color);
                    color: var(--white-color);
                    border: 1px solid var(--first-color) !important;
                  }
                }
              }
            }
          }
        }

        .categories {
          width: 60%;
          position: relative;
        }
        .links {
          width: 40%;
          @media screen and (max-width: map-get($grid, xl)) {
            display: none !important;
          }
        }
        .categories,
        .links {
          display: flex;
          align-items: center;
          ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            li {
              display: flex;
              button {
                all: unset;
                cursor: pointer;
              }
              a,
              button {
                color: var(--second-color);
                border-radius: var(--main-border-radius);
                text-decoration: none;
                padding: 8px 17px;
                transition: var(--main-transition);
                display: flex;
                justify-content: center;
                align-items: center;
                &:hover {
                  color: var(--first-color);
                }
                &:hover svg path {
                  fill: var(--first-color) !important;
                }
                &.pos {
                  color: var(--white-color);
                  background: var(--first-color);
                  border-radius: var(--main-border-radius);
                  min-width: 50px;
                  margin: 0px 10px;
                }
                svg,
                span {
                  font: {
                    size: 18px;
                  }
                }
                svg {
                  width: 25px;
                  height: 25px;
                  margin: {
                    right: 8px;
                  }
                  path {
                    transition: var(--main-transition);
                  }
                }
              }
              a {
                &.router-link-exact-active {
                  color: var(--first-color);
                  svg path {
                    fill: var(--first-color) !important;
                  }
                }
              }
            }
          }
        }
        .links {
          ul {
            li {
              button {
                &#change_lang {
                  span {
                    text-transform: uppercase;
                  }
                }
              }
            }
          }
        }
        .categories {
          @media screen and (max-width: map-get($grid, xxl)) {
            width: 30%;
          }
          ul {
            li {
              &:not(:last-of-type) {
                margin: {
                  right: 15px;
                }
              }
              &.in-more {
                display: flex;
                @media screen and (max-width: map-get($grid, xxl)) {
                  display: none;
                }
                @media screen and (max-width: map-get($grid, lg)) {
                  display: flex;
                }
              }
              &.more {
                display: none;
                position: relative;
                @media screen and (max-width: map-get($grid, xxl)) {
                  display: flex;
                }
                @media screen and (max-width: map-get($grid, lg)) {
                  display: none;
                }
                button {
                  svg {
                    margin: {
                      right: 0px;
                      left: 8px;
                    }
                  }
                }
                &.open {
                  button {
                    color: var(--first-color);
                    svg {
                      path {
                        fill: var(--first-color) !important;
                      }
                    }
                  }
                  .drop-down {
                    display: flex;
                  }
                }
                .drop-down {
                  width: 200px;
                  background: var(--white-color);
                  position: absolute;
                  top: calc(100% + 15px);
                  left: 50%;
                  transform: translateX(-50%);
                  z-index: 99999999999999999999;
                  display: none;
                  flex-direction: column;
                  border-radius: var(--main-border-radius);
                  padding: 10px 0;
                  transition: var(--main-transition);
                  opacity: 0;
                  @include mainBoxShadow();
                  &::before {
                    content: "";
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-bottom: 10px solid var(--white-color);
                  }
                  li {
                    width: 100%;
                    margin: 0;
                    display: flex;
                    &:not(:last-of-type) {
                      margin: {
                        bottom: 5px;
                      }
                    }
                    a {
                      width: 100%;
                      background: none;
                      justify-content: flex-start;
                    }
                  }
                }
              }

              a,
              button {
                background: var(--white-color);
                padding: 8px 16px;
              }
            }
          }
        }
        .links {
          @media screen and (max-width: map-get($grid, xxl)) {
            width: 100%;
          }
          ul {
            margin-right: auto;
            margin-left: 0px;
            li {
              margin: 0 2px;
              &:last-of-type {
                margin: {
                  right: 0;
                }
              }
              a,
              button {
                svg {
                  margin: {
                    right: 6px;
                  }
                }
              }
              button {
                &#sign-in {
                  border: 1px solid var(--button-border);
                  transition: var(--main-transition);
                  padding: 8px 30px;
                  &:hover {
                    background: var(--first-color);
                    color: var(--white-color);
                  }
                }
              }
            }
            .profile,
            .notifications {
              display: flex;
              margin: 0 4px;
              position: relative;
              .profile__button {
                cursor: pointer;
                button {
                  all: unset;
                  // border-radius: 50%;width: 50px;
                  // overflow: hidden;
                  // margin: 0 5px;
                  @media screen and (max-width: map-get($grid, lg)) {
                    display: none;
                  }
                }
                img {
                  width: 36px;
                  height: 36px;
                  object-fit: cover;
                  border-radius: 50%;
                }
                h6 {
                  margin: 0 6px;
                }
              }
              .profile-list {
                background: var(--white-color);
                width: 300px;
                position: absolute;
                top: calc(100% + 25px);
                right: 0;
                display: flex;
                flex-direction: column;
                padding: 10px 0;
                @include mainBoxShadow();
                border-radius: var(--main-border-radius);
                @media screen and (max-width: map-get($grid, lg)) {
                  position: relative;
                  top: 0;
                }
                &::before {
                  content: "";
                  background: var(--white-color);
                  width: 20px;
                  height: 20px;
                  position: absolute;
                  top: 0;
                  right: 10%;
                  transform: translateY(-50%) rotate(45deg);
                }
                .info {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  padding: 0 10px;
                  .image {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                    img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                  }
                  .data {
                    width: calc(100% - 100px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin: 0 10px;
                    padding: 10px 0;
                    h4 {
                      width: 95%;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      color: var(--first-text-color);
                      margin: 0;
                    }
                    span {
                      width: 95%;
                      color: var(--second-text-color);
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                      display: flex;
                    }
                  }
                }

                .links-list {
                  width: 100%;
                  margin: {
                    top: 20px;
                  }
                  ul {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    li {
                      width: 100%;
                      &:not(:last-of-type),
                      &.inProfile {
                        border-top: 1px solid var(--button-border);
                      }
                      &:nth-of-type(7) {
                        border-bottom: 1px solid var(--button-border);
                      }

                      a {
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        padding: 12px 10px;
                        svg {
                          path {
                            fill: var(--second-color);
                          }
                        }
                      }
                      button {
                        all: unset;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        cursor: pointer;
                        padding: 12px 10px;
                        &:hover {
                          .title {
                            span {
                              color: var(--first-color);
                            }
                          }
                        }
                        .title {
                          span {
                            color: var(--first-text-color);
                            transition: var(--main-transition);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.is-ar {
  // nav bar
  nav#navbar .content .categories ul li a svg,
  nav#navbar .content .categories ul li button svg,
  nav#navbar .content .links ul li a svg,
  nav#navbar .content .links ul li button svg {
    margin: {
      right: 0;
      left: 8px;
    }
  }
  nav#navbar .content .all-links .categories ul li.more button svg {
    margin: {
      right: 8px;
      left: 0;
    }
  }
  nav#navbar .content .logo {
    margin: {
      right: 0;
      left: 20px;
    }
  }
  nav#navbar .content .categories ul li:not(:last-of-type) {
    margin: {
      right: 0;
      left: 15px;
    }
  }
  nav#navbar .content .links ul {
    // margin: {
    //   left: 0;
    //   right: auto;
    // }
    li:last-of-type {
      margin: 0 2px;
      margin {
        left: 0;
      }
    }
  }
  nav#navbar .content .categories ul li a svg,
  nav#navbar .content .categories ul li a span,
  nav#navbar .content .categories ul li button svg,
  nav#navbar .content .categories ul li button span,
  nav#navbar .content .links ul li a svg,
  nav#navbar .content .links ul li a span,
  nav#navbar .content .links ul li button svg,
  nav#navbar .content .links ul li button span {
    font: {
      size: 15px;
    }
  }
  nav#navbar .content .all-links .links ul .profile,
  nav#navbar .content .all-links .links ul .notifications {
    .profile-list {
      right: unset;
      left: 0;
      &::before {
        right: unset;
        left: 10%;
      }
    }
  }
}

.filtering {
  margin-right: 16%;
  border: 1px solid #ced4e8;
  border-radius: 8px;
  height: 44px;
  width: auto;
  margin-top: 12px;
  button {
    background-color: transparent !important;
    box-shadow: 0px 0px 0px;
    padding: 0px 13px;
    vertical-align: middle;
    border: 0px;
    vertical-align: text-bottom;
    &:hover {
      background: transparent;
    }
    svg {
      width: 20px;
      height: 23px;
    }
  }
  .button:before {
    background-color: transparent !important;
  }
  input {
    padding: 0px;
    height: 100%;
    margin: 0px;
    transition: 0.5s all ease-in-out;
    width: 0px;
    border-radius: 10px;
    border: 0px;
    &:focus-visible {
      outline: 0;
    }
  }
  .showSearch {
    width: 400px;
  }
}
.list_popups {
  p {
    font-weight: bold;
    color: var(--first-text-color);
  }
}
</style>
