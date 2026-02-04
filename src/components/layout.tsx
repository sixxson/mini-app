import { getSystemInfo } from 'zmp-sdk'
import { App, ZMPRouter, AnimationRoutes, Route } from 'zmp-ui'
import { AppProps } from 'zmp-ui/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from '@/pages/Login'
import HomePage from '@/pages'
import ProductList from '@/pages/ProductList'
import ProductDetail from '@/pages/ProductDetail'
import BottomNavigation from './BottomNavigation'

import { useAtomValue } from 'jotai'
import { tokenState } from '@/state'

const Layout = () => {
	const token = useAtomValue(tokenState)

	return (
		<App theme={getSystemInfo().zaloTheme as AppProps['theme']}>
			<ZMPRouter>
				<AnimationRoutes>
					<Route path="/" element={<HomePage />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/product/:id" element={<ProductDetail />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<HomePage />} />
				</AnimationRoutes>
				<BottomNavigation />
			</ZMPRouter>
			<ToastContainer position="bottom-right" />
		</App>
	)
}

export default Layout
