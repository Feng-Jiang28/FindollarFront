import {Card, Row, Col} from 'antd';


const PopularCategories = () => {
  const categories = [
    {title: 'Kitchen', imgSrc: '/img/kitchen.jpg', items: 500},
    {title: 'Electronics', imgSrc: '/img/electronics.jpg', items: 200},
    {title: 'Furniture', imgSrc: '/img/furnitures.jpg', items: 200},
    {title: 'Entertainments', imgSrc: '/img/entertainments.jpg', items: 167},
    {title: 'Others', imgSrc: '/img/others.jpg', items: 213}
  ];

  return(
    <div className={"flex flex-col items-center justify-center min-h-screen space-y-4"}>
      <h2 className="text-2xl font-bold">Popular Categories</h2>
      <Row gutter={[16, 16]} className={"w-full justify-center"}>
        {categories.map(category =>(
          <Col span={4} key={category.title}>
            <Card hoverable
                  cover={<img alt={category.title} src={category.imgSrc}/>}>
            <Card.Meta title={category.title} description={`${category.items} items`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
};

export default PopularCategories;
