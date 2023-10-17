
import { Card, Button, Tabs} from 'antd';
import 'antd/dist/reset.css';
import { AreaChartOutlined,RightOutlined,ClockCircleOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

function Blog3() {
    // Dummy data for your cards
    const posts = [
        {
            title: "Loudest à la Madison #1 (L'integral)",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            image: "/img/unsplash_3.svg",
            date: "22 April 2021",
            comments: 10
        },
        {
            title: "Loudest à la Madison #1 (L'integral)",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            image: "/img/unsplash_2.svg",
            date: "22 April 2021",
            comments: 10
        },
        {
            title: "Loudest à la Madison #1 (L'integral)",
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            image: "/img/unsplash_1.svg",
            date: "22 April 2021",
            comments: 10
        },
    ];

    return (
        <div className="m-10">
            <h1 style={{ color: "#23A6F0" }}
                className="text-base font-bold leading-6 tracking-wider text-center align-top font-montserrat">
                Practice Advice
            </h1>
            <h2 style={{ color: "#252B42", letterSpacing: "0.2px", lineHeight: "50px" }}
                className="text-4xl font-bold text-center align-top font-montserrat mb-10">Featured Posts</h2>
            <div className="flex items-start justify-center mx-auto py-0 w-[1045px] h-[606px] space-x-8 ">
                {posts.map((post, index) => (
                    <Card
                        key={index}
                        hoverable

                        cover={
                            <div className="relative">
                                <span className="absolute top-5 left-2 bg-red-600 text-white px-2 py-1">New</span>
                                <img alt={post.title} src={post.image} />
                            </div>
                            //<img alt={post.title} src={post.image} />
                            }
                        className="rounded-none overflow-hidden w-[328px] h-[606px] text-left"
                    >
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Google" key="1"></TabPane>
                            <TabPane tab="Trending" key="2"></TabPane>
                            <TabPane tab="New" key="3"></TabPane>
                        </Tabs>
                        <h2 className="font-montserrat text-2xl leading-7.5 text-[#252B42] mb-2" style={{ letterSpacing: '0.2px' }}>{post.title}</h2>
                        <p className="font-montserrat text-sm leading-5 text-gray-400" style={{ letterSpacing: '0.2px' }}>{post.description}</p>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-500"> <ClockCircleOutlined style={{ color: '#23A6F0',  marginRight: '4px'  }} />{post.date}</span>
                            <span className="text-sm text-gray-500"> <AreaChartOutlined style={{ color: 'green', marginRight: '4px' }}/>{post.comments} comments</span>
                        </div>
                        <div className="flex  mt-4 ">
                            <span className="text-gray-400 font-bold font-montserrat">
                                    Learn More
                            </span>
                            <Button type="link" className="ml-[-0.5rem] flex items-start  justify-start">
                                <RightOutlined />
                            </Button>
                        </div>

                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Blog3;
