import VueRouter from "vue-router"  
import Reason from './components/Reason'
import Items from './components/Items'
import Image from './components/Image'
import MoreImages from './components/MoreImages'

  
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
    ],
    mode: 'history' 
})