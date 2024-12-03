import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import ProductsPage from "../components/ProductsPage.vue";
import AboutPage from "../components/AboutPage.vue"
import CartPage from "../components/CartPage.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import PracticePage from "@/components/PracticePage.vue";
import LifeCycle from "@/components/LifeCycle.vue";



const routes = [
  { path: "/", name: "Home", component: LandingPage },
  { path: "/Products", name: "Products", component: ProductsPage },
  { path: "/About", name: "About",component: AboutPage },
  { path: "/Cart", name: "Cart",component:CartPage},
  { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
  //pracice paths
  { path: "/Register", name: "Register", component: RegistrationForm },
  { path: "/Practice", name: "Practice", component:PracticePage},
  { path: "/Lifecycle", name:"Lifecycle", component:LifeCycle},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
