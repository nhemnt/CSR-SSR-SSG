import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import { getPostByUrl } from '../../utils/api';

const Post = () => {
  const router = useRouter();
  const id = router.query.id
  const [post, setPost] = useState({});
  useEffect(() => {
    if(!id) return;
    getPostByUrl(id).then((posts) => {
      setPost(posts?.data?.data?.[0]);
    });
  }, [id]);
  return <Card post={post} full />;
};

export default Post;
