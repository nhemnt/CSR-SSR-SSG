import React from 'react';
import Card from '../../components/card';
import { getPostByUrl } from '../../utils/api';

const Post = ({post}) => {
  return <Card post={post} full />;
};


export async function getServerSideProps({params}) {
  console.log({
    params: params.id
  })
  const posts = await getPostByUrl(params.id);
  return {
    props: {
      post:  posts?.data?.data?.[0] || {}
    }, // will be passed to the page component as props
  }
}

export default Post;
