import { Button, Avatar } from 'antd';
//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const PersonalCard = () => {
  return (
    <div className="flex flex-col pb-5 relative bg-black">
    <div className="flex items-center justify-between p-4 bg-black text-white">
      <div className="pl-[30%] flex items-center">
        <Avatar size={84} src="/img/Guaiguai.png" />
        <div className="ml-6">
          <div className="text-lg font-semibold">自由的格兰芬多猫</div>
          <div className="flex items-center">
            <div className="text-xs text-gray-400">小红书号: 49166848</div>
            <div className="ml-3 text-xs text-gray-400">IP属地: 深圳</div>
          </div>
          <div className="mt-2 text-sm">还没有简介</div>
          <div className="mt-2 flex items-center">
            <img src="/img/female.svg" className="w-3 h-3 mr-2" />
            <span className="text-xs text-gray-400 w-full">摩羯座</span>
          </div>

          <div className="flex items-center mt-2">
            <span className="text-xs mr-1">10+</span>
            <span className="text-xs text-gray-400">关注</span>
            <span className="ml-3 text-xs mr-1">100+</span>
            <span className="text-xs text-gray-400">粉丝</span>
            <span className="ml-3 text-xs mr-1">1k+</span>
            <span className="text-xs text-gray-400">获赞与收藏</span>
          </div>

        </div>
        <Button className="absolute top-4 right-[35%] text-white border-none bg-red-500" shape="round">关注</Button>
      </div>

    </div>
      <div className="mt-10 pl-[42%] bg-black flex items-center">
        <span className="text-sm text-white mr-30">笔记</span>
        <span className="text-sm text-gray-400">收藏</span>
      </div>
    </div>
  );
};

export default PersonalCard;
