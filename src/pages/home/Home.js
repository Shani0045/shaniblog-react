import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Leftsidebar from '../../components/sidebar/Leftsidebar'
import Rightsidebar from '../../components/sidebar/Rightsidebar'
import RecentBlog from '../../components/recent-blog/RecentBlog'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostRequest } from '../../redux/actions/postAction'

function Home() {

  return (
    <Layout>
        <div>
            <div className='d-flex justify-content-between'>
                <Leftsidebar/>
                {/* <Rightsidebar/> */}
            </div>
        <RecentBlog/>
        </div>
    </Layout>
  )
}


export default Home;

