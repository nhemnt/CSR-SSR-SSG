import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Card from '../card';
import Navbar from '../navbar';

const Posts = ({ title, posts }) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <Row>
        {posts.map((post) => (
          <Col sm="6" className="my-2" key={post.id}>
            <Card post={post} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Posts;
