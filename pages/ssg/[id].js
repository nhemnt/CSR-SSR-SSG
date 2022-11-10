import React from 'react'
import Card from '../../components/card';
import { getAllPosts, getPostByUrl } from '../../utils/api';

const Post = ({post}) => {
  return (
    <Card post={post} full/>
  )
}

export async function getStaticPaths() {
   const data = await getAllPosts();
   const posts = data.data.data
  return {
    
    paths: posts.map((post, i) => ({
            params: {
                id: post.attributes.url || i.toString(),
            },
        })),
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps({params}) {
   const posts = await getPostByUrl(params.id);
    return {
        props: {
           post: posts?.data?.data?.[0] || {}
        },
    };
}

export default Post