import { useRouter } from 'next/router';
import React from 'react'
import { getAllPosts } from '../../../utils/api';

const R = ({posts}) => {
  const router = useRouter();
  const id = router.query.id
  const name = router.query.name

  return (
    <div>{id} {name}
    
    
  {JSON.stringify(posts)}
    </div>
  )
}

export default R

export async function getServerSideProps(context) {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts.data.data
    }, // will be passed to the page component as props
  }
}
