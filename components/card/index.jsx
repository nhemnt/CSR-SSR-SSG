import React from 'react';
import { Button, Card, CardText, CardTitle } from 'reactstrap';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Main = ({
  post: {
    attributes : { content, createdAt, publishedAt, tags = { data: []}, slug, url } = {},
  } = { attributes : {}},
  full = false,
}) => {
  const { asPath } = useRouter()
  return (
    <Card body>
      <CardTitle tag="h5">{slug}</CardTitle>
      <CardText tag="div">
        <div
          className={full ? '' : 'ellipsis'}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </CardText>
      <div className='m-3'>
        {tags?.data.map(tag => (
          <Button color="primary text-capitalize mx-1" key={tag.attributes.tag_id}>
            {tag.attributes.name}
          </Button>
        ))}
        </div>
      {!full && <Button><Link className="text-white" href={`${asPath}/${url}`}>Read more</Link> </Button>}
    </Card>
  );
};

export default Main;
