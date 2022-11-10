import React from 'react'
import Posts from '../../components/post'
import { getAllPosts } from '../../utils/api'


export async function getStaticProps() {
   const posts = await getAllPosts();
    return {
        props: {
           posts: posts.data.data
        },
        revalidate: 60 * 60 * 10, // 10 hr in seconds
    };
}


const SSG = ({posts = []}) => {
  return (
     <Posts posts={posts} title="SSG (Static Site Generation)" />
  )
}

export default SSG
