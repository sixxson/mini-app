import { useEffect, useState } from 'react'
import { getProductById, getProducts } from '@/api/product'
import { Product } from '@/types/product'

export function useProducts() {
    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        getProducts()
            .then(setData)
            .catch(setError)
            .then(() => setLoading(false))
    }, [])

    return { data, loading, error }
}

export function useProduct(id?: string | number) {
    const [data, setData] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        if (!id) {
            setLoading(false)
            return
        }

        setLoading(true)
        getProductById(Number(id))
            .then(setData)
            .catch(setError)
            .then(() => setLoading(false))
    }, [id])

    return { data, loading, error }
}
