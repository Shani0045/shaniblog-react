import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostRequest } from '../../redux/actions/postAction'
import Card from '../../components/cards/Card'
import Loading from '../../components/loading/Loading'


function Dummy() {
    const {loading, data, error } = useSelector( state => state.allProducts)
    const dispatch = useDispatch()

    useEffect(()=>{
        // if (!data?.products){   // use to stop api call 
            dispatch(getAllPostRequest())
        // }
    }, [])

  return (
    <Layout>        
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-center flex-shrink'>
               {loading? <Loading/> : 
               data?.products ? 
                data.products.map((prod, key)=>(
                    prod.images.length > 1 && (
                    <div className='m-2' key={key}>
                        <Card title={prod.title} desc={prod.description} img={prod.thumbnail} images={prod.images} />
                    </div>
                    )
                )) : 
                <h1> Data Not Found </h1>
               }
            </div>
        </div>
    </Layout>
  )
}


export default Dummy