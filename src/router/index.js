import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";

const routes = [
  {
    path: '/',
    exact: true,
    component: Discover,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/friend',
    component: Friend,
  },

  {
    path: '',
    component: '',
  },
]

export default routes