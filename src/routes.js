import VueRouter from "vue-router"  
import Reason from './pages/Reason'
import Items from './pages/Items'
import Image from './pages/Image'
import MoreImages from './pages/MoreImages'

  
export default new VueRouter({
    routes: [
        {
            path: '',
            component: Reason     
          },
        {
            path: '/items',
            component: Items
        },
        {
            path: '/image',
            component: Image
        },
        {
            path: '/more',
            component: MoreImages
        }
    ]  
})