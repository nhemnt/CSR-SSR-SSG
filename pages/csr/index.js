import React, { use, useEffect, useState } from 'react';
import Posts from '../../components/post';
import { getAllPosts } from '../../utils/api';

const promise = getAllPosts()
const CSR = () => {
  const posts = use(promise); // not stable

  // // TODO: in case of "use" is not working
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   getAllPosts().then((data) => {
  //     setPosts(data);
  //   });
  // }, []);
  return (
    <>
    <Posts
      posts={posts?.data?.data || []}
      title="CSR (Client Side Rendering)"
    />
    </>
  );
};

export default CSR;
