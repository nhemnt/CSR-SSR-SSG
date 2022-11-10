import React from 'react'
import Posts from '../../components/post';
import { getAllPosts } from '../../utils/api';
 const SSR = ({posts}) => {

  return (
    <Posts posts={posts} title="SSR (Server Side Rendering)" />
  )
}

export default SSR;

export async function getServerSideProps(context) {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts.data.data
    }, // will be passed to the page component as props
  }
}
