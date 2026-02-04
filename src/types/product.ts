export interface Product {
    id: number
    link: string
    title: RenderedField
    content: ContentField
    wc_data?: WooCommerceData
    excerpt?: RenderedField
}

export interface RenderedField {
    raw?: string
    rendered: string
}

export interface ContentField extends RenderedField {
    block_version?: number
    protected?: boolean
}

export interface WooCommerceData {
    currency: string
    price: string
    regular_price: string
    sale_price: string
    image: {
        id: string
        url: string
        alt: string
    }
    gallery: Array<{
        id?: string
        url: string
        alt?: string
    }>
}
