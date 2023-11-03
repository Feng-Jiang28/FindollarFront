import React from 'react';
import { Avatar, Button } from 'antd';
import 'tailwindcss/tailwind.css';

import { Tooltip } from 'antd';
import { HeartOutlined, MessageOutlined, RetweetOutlined, HeartFilled } from '@ant-design/icons';

import { StarOutlined, AtOutlined, MoreOutlined } from '@ant-design/icons';

import { Carousel } from 'antd';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { useRef } from 'react';

const PostContent: React.FC = () => {

  const carouselRef = useRef(null);
  return (
    <div className="flex">



      <div className="w-1/2 bg-black">
        {/*<div>*/}
          <Carousel ref={carouselRef}>
            {/*<Carousel arrows>*/}
            <img src="/img/Guaiguai.png" alt="Slide 5/7" className="h-full object-cover" />
            <img src="/img/Guaiguai.png" alt="Slide 5/7" className="h-full object-cover" />
            <img src="/img/Guaiguai.png" alt="Slide 5/7" className="h-full object-cover" />
          </Carousel>

          <div
            className="absolute top-1/2 left-1/10 transform -translate-y-1/2 cursor-pointer"
            onClick={() => {
              carouselRef.current.prev();
            }}
          >
            <LeftOutlined className="text-white hover:text-gray-400" />
          </div>
          <div
            className="absolute top-1/2 right-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => {
              carouselRef.current.next();
            }}
          >
            <RightOutlined className="text-white hover:text-gray-400" />
          </div>

        {/*}</div>*/}
      </div>





      <div className="w-1/2 bg-black text-white p-4">
        <div className="flex justify-between">
          <div className="flex items-center mb-4">
            <Avatar src="/img/Guaiguai.png" />
            <div className="ml-4">
              <p className="font-bold">乖乖</p>
            </div>
          </div>
          <button className="space-x-4 bg-red-500 hover:bg-blue-700 text-white font-bold h-8 px-4 rounded">
            关注
          </button>
        </div>



        <div className="max-h-64 overflow-y-auto">
        <h3 className="font-bold text-lg mb-4">
          我的午餐：发给爸妈的vs实际吃的
        </h3>
        <p className="mb-4">
          这个月想减肥定了个十斤的小目标，我妈比我还紧张，就是生怕我少吃了一点。天天查岗一样监督我吃饭早知道不和她说了

        </p>
        <div className="flex items-center mb-4">
          <p className="font-bold text-gray-400 mr-2">#妈妈的爱</p>
          <p className="font-bold text-gray-400 mr-2">#减肥</p>
          <p className="font-bold text-gray-400 mr-2">#减脂餐</p>
          <p className="font-bold text-gray-400 mr-2">#瘦了</p>
          <p className="font-bold text-gray-400 mr-2">#蛋白质</p>
          <p className="font-bold text-gray-400 mr-2">#我爱吃海鲜</p>
          <p className="font-bold text-gray-400">#宝宝辅食</p>
        </div>
        <p className="text-gray-400">2023-10-25</p>
        <div className="border-t border-gray-900 my-4"></div>
        <p className="text-gray-400 mr-2">共 10+ 条评论</p>

        <div className="mt-2 bg-black shadow-md rounded-md space-y-4">
          <div className="flex space-x-4">
            <Avatar src="/img/Guaiguai.png" />
            <div>
              <h4 className="font-bold">yoke.</h4>
              <p>
                亲测吃鸡胸肉三天瘦了1.2斤。吃虾三天瘦了3.7斤。不知道我算不算大基数，体重132，现在127了。
              </p>
              <p className="text-gray-400 mr-2">昨天 23:16 安徽</p>
              <Button type="text" className="text-gray-900" icon={<HeartOutlined className="text-white" />} />
              <span className="pr-4">3</span>
              <Button type="text" className="text-gray-900" icon={<MessageOutlined className="text-white" />} />
              <span className="pr-4">4</span>


              <div className="flex space-x-4 ml-2">
                <Avatar src="/img/Guaiguai.png" />
                <div>
                  <h4 className="font-bold">家有宝贝（两只可爱的猫咪）</h4>
                  <p>
                    肯定是大基数啊，一百以内才是小基数。
                  </p>
                  <p className="text-gray-400 mr-2">今天 00:41 浙江</p>
                  <Button type="text" className="text-gray-900" icon={<HeartOutlined className="text-white" />} />
                  <span className="pr-4">3</span>
                  <Button type="text" className="text-gray-900" icon={<MessageOutlined className="text-white" />} />
                  <span className="pr-4">回复</span>
                </div>
              </div>


              <div className="flex space-x-4 ml-2">
                <Avatar src="/img/Guaiguai.png" />
                <div>
                  <h4 className="font-bold">做人没必要太正常</h4>
                  <div>
                    <span>回复：</span>
                    <span className="text-gray-400">家有宝贝（两只可爱的猫咪）</span>肯定是大基数啊，一百以内才是小基数。
                  </div>


                  <p className="text-gray-400 mr-2">今天 01:25 江西</p>
                  <Button type="text" className="text-gray-900" icon={<HeartOutlined className="text-white" />} />
                  <span className="pr-4">赞</span>
                  <Button type="text" className="text-gray-900" icon={<MessageOutlined className="text-white" />} />
                  <span className="pr-4">回复</span>
                </div>
              </div>



            </div>
          </div>
        </div>
        </div>


        <div className="bg-black text-white p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6">
          <span className="flex items-center space-x-0.1">
            <Button type="text" className="text-gray-900" icon={<HeartOutlined className="text-white" />} />
            <span>100+</span>
          </span>
              <span className="flex items-center space-x-0.1">
            <Button type="text" className="text-gray-900" icon={<StarOutlined className="text-white" />} />
            <span>10+</span>
          </span>
              <span className="flex items-center space-x-0.1">
            <Button type="text" className="text-gray-900" icon={<MessageOutlined className="text-white" />} />
            <span>10+</span>
          </span>
            </div>

            <button className="rounded">
              <img src="/img/share.png" alt="share" className="w-5 h-5"/>
            </button>

          </div>
          <div className="relative mt-4 rounded-full bg-gray-900">
            <input
              className="w-full px-4 py-2 rounded-full bg-transparent outline-none placeholder-gray-400"
              placeholder="登录后进行评论"
            />

            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-4">
              <button className="rounded">
                <img src="/img/at.png" alt="at" className="w-8 h-8"/>
              </button>
              <button className="rounded">
                <img src="/img/smileFace.png" alt="smileFace" className="w-8 h-8"/>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default PostContent;
