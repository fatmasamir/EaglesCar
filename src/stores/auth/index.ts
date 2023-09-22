import { defineStore } from "pinia";
import type { Status, User, Form, Register, Login } from "./interface";
import { reactive, ref } from "vue";
import type Forms from "../../components/global/register/interface/forms";
import callServer from "../../assets/scripts/callServer/callServer";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const toast = useToast();
const router = useRouter();

export const useAuthStore = defineStore("auth", () => {
    const status = ref<Status>("pending");
    const user = ref<User>();

    const form = ref<Form>({
        current: "login",
        status: false,
    });
    const home = ref();
    const notifications = ref();
    const is_error = ref<Boolean>(false);
    const is_loading = ref<Boolean>(false);
    const is_auth = ref<Boolean>(false);
    const is_waiting = ref<Boolean>(false)

    // change auth status
    function changeAuthStatus(newStatus: Status) {
        status.value = newStatus;
    }

    // update user
    function updateUser(data: User) {
        user.value = data;
    }

    // change form
    function changeForm(value: Forms) {
        form.value.current = value;
    }

    // change form status
    function changeFormStatus(value: boolean) {
        form.value.status = value;
    }

    // -- auth functions
    // register
    async function register(data: Register) {
        const response = await callServer({
            url: "auth/register",
            method: "POST",
            data,
        });

        if (!response.ok) {
            let errors = null;
            await response.json().then((data) => {
                errors = data.errors;
            });
            throw errors;
        }
    }

    // login
    async function login(data: URLSearchParams) {
        is_loading.value = true
        form.value.status = false
        is_waiting.value = true;
        const response = await callServer({
            url: "login",
            method: "POST",
            data,
            type: "application/x-www-form-urlencoded",
            auth: true,
        });

        if (response.ok) {
            is_auth.value = true
            response.json().then(async (data: { access_token: string }) => {
                status.value = "fulfilled"
                localStorage.setItem("access_token", data.access_token);
                await profile();
                toast.success("تم تسجيل الدخول بنجاح")
            });
            is_auth.value = true
            is_loading.value = false
        } else {
            is_error.value = true;
            is_loading.value = false
            is_waiting.value = false;
            form.value.status = true
            toast.error("يرجي التأكد من صحة البيانات المدخلة")
            throw response.status;
        }
    }

    function logOut() {
        status.value = 'rejected';
        user.value = undefined;
        localStorage.removeItem("access_token");
        toast.success("تم تسجيل الخروج بنجاح")
    }

    // profile
    async function profile() {
        const response = await callServer({
            url: "auth/profile",
            auth: true,
        });
        if (response.ok) {
            response.json().then((data) => {
                user.value = data.data;
                form.value.status = false;
                status.value = "fulfilled";
            });
        }
        else {
            status.value = "rejected";
            // sessionStorage.removeItem("access_token")
        };
    }

    // notifications
    async function get_notifications() {
        const response = await callServer({
            url: "notifications",
            auth: true,
        });
        if (response.ok) {
            response.json().then((data) => {
                notifications.value = data;
            });
        } else {

        };
    }
    async function get_home() {
        const response = await callServer({
            url: "home",
            auth: true,
        });
        if (response.ok) {
            response.json().then((data) => {
                home.value = data;
            });
        }
    }

    return {
        status,
        user,
        form,
        home,
        notifications,
        is_loading,
        is_auth,
        is_waiting,
        changeAuthStatus,
        updateUser,
        changeForm,
        changeFormStatus,
        register,
        login,
        logOut,
        profile,
        get_notifications,
        get_home
    };
});
