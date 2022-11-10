import axios from './request';

export const getAllPosts = () => axios('/posts?populate=tags')

export const getPostByUrl = (url) => axios(`posts?populate=tags&filters%5Burl%5D=${url}`);