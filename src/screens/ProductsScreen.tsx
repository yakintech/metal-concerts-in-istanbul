import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { axiosInstance } from '../api/axiosInstance'

const ProductsScreen = () => {
    //State herhangi bir değişiklik olduğunda componentin tekrar render edilmesini sağlar.
    const [products, setproducts] = useState<any[]>([])


    //useEffect sadece bir kere çalışır. Component ilk render edildiğinde çalışır. O ekranın açılması için gerekli olan verileri çekmek için kullanılır.
    useEffect(() => {
        axiosInstance.get('products')
            .then(res => {
                setproducts(res.data)
            })
    }, [])


    return (<>
        <FlatList
            data={products}
            renderItem={({ item }) => <Text>{item.name} - {item.unitPrice.toFixed(2)}</Text>}
        />
    </>
    )
}

export default ProductsScreen

//fetch veya axios ile apiye istek atıp gelen verileri products state'ine atıyoruz.