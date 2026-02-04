import React from 'react'
import { Page, Header, Box } from 'zmp-ui'
import Products from '@/components/Products'

const ProductList = () => {
	return (
		<Page className="bg-slate-50">
			<Header title="Danh sách sản phẩm" showBackIcon={false} />
			<Box className="p-4">
				<Products />
			</Box>
		</Page>
	)
}

export default ProductList
