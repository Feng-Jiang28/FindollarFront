

// Filter.tsx
import React,{ useState } from 'react';
import { Checkbox, InputNumber, Tag, Button, Collapse, ConfigProvider } from 'antd';
import { StarFilled} from '@ant-design/icons';
import type { CollapseProps } from 'antd';



function Filter(){

  const [selectedToys, setSelectedToys] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);


  const onToysChange = (values: any) => {
    setSelectedToys(values);
  };
  const onConditionChange = (values: any) => {
    setSelectedConditions(values);
  };
  const onRatingChange = (values: any) => {
    setSelectedRating(values);
  };
  const onPriceChange = (values: any) => {
    setSelectedPrice(values);
  };


  const handleCloseToys = (removedFilter: string) => {
    const updatedFilters = selectedToys.filter((filter) => filter !== removedFilter);
    setSelectedToys(updatedFilters);
  };
  const handleCloseCondition = (removedFilter: string) => {
    const updatedFilters = selectedConditions.filter((filter) => filter !== removedFilter);
    setSelectedConditions(updatedFilters);
  };
  const handleCloseRating = (removedFilter: string) => {
    const updatedFilters = selectedRating.filter((filter) => filter !== removedFilter);
    setSelectedRating(updatedFilters);
  };
  const handleClosePrice = (removedFilter: string) => {
    const updatedFilters = selectedPrice.filter((filter) => filter !== removedFilter);
    setSelectedPrice(updatedFilters);
  };

  const handleResetAll = () => {

    setSelectedToys([]);
    setSelectedConditions([]);
    setSelectedRating([]);
    setSelectedPrice([]);
  };



  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h3 className="text-lg font-semibold mb-2">Toys & Hobby</h3>,
      children: (
        <div className="mb-4">
          <Checkbox.Group className="flex flex-col" onChange={onToysChange} value={selectedToys}>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Airsoft Gun Accessories">Airsoft Gun Accessories</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>109</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Board Game">Board Game</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>45</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Doll">Doll</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>56</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Dicast">Dicast</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>10</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Children's toy">Children's toy</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>34</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Remote Control">Remote Control</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>56</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Model Kit">Model Kit</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>78</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Puzzle">Puzzle</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>36</span>
            </div>
            <div className="flex justify-between w-full items-centerl">
              <Checkbox value="Stress Relieve Toy">Stress Relieve Toy</Checkbox>
              <span style={{ color: '#646464', fontFamily: 'General Sans' }}>13</span>
            </div>
          </Checkbox.Group>
        </div>
      ),
    },
    {
      key: '2',
      label: <h3 className="text-lg font-semibold mb-2">Location</h3>,
      children: (
        <div className="mb-4">

        </div>),
    },
    {
      key: '3',
      label: <h3 className="text-lg font-semibold mb-2">Condition</h3>,
      children: (
        <div className="mb-4">
          <Checkbox.Group className="flex flex-col" onChange={onConditionChange} value={selectedConditions}>
            <Checkbox value="New">New</Checkbox>
            <Checkbox value="Used">Used</Checkbox>
            <Checkbox value="Refurbished">Refurbished</Checkbox>
          </Checkbox.Group>
        </div>
      ),
    },
    {
      key: '4',
      label: <h3 className="text-lg font-semibold mb-2">Rating</h3>,
      children: (
        <div className="mb-4">
          <Checkbox.Group className="flex flex-col" onChange={onRatingChange} value={selectedRating}>
            <Checkbox value="Above 4">
              Above 4
              <StarFilled className={selectedRating.includes('Above 4') ? 'text-yellow-500' : 'text-gray-500'} />
            </Checkbox>
            <Checkbox value="Under 3">
              Under 3
              <StarFilled className={selectedRating.includes('Under 3') ? 'text-yellow-500' : 'text-gray-500'} />
            </Checkbox>
          </Checkbox.Group>
        </div>
      ),
    },
    {
      key: '5',
      label: <h3 className="text-lg font-semibold mb-2">Price</h3>,
      children: (
        <div className="mb-4">
          <div className="flex items-center">
            <InputNumber style={{ width: '49%' }} min={1} max={10000} defaultValue={10} formatter={(value) => `$ ${value}`} />
            <span className="mx-2">-</span>
            <InputNumber style={{ width: '49%' }} min={1} max={10000} defaultValue={350} formatter={(value) => `$ ${value}`} />
          </div>
          <Button style={{ width: '100%', borderColor: '#5A4098'}}>Save</Button>
          <Checkbox.Group className="flex flex-col" onChange={onPriceChange} value={selectedPrice}>
            <Checkbox value="$10.00 - $49.00">$10.00 - $49.00</Checkbox>
            <Checkbox value="$50 - $99.00">$50 - $99.00</Checkbox>
            <Checkbox value="$100 - $199">$100 - $199</Checkbox>
            <Checkbox value="$200.00 and UP">$200.00 and UP</Checkbox>
          </Checkbox.Group>
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "orange",
        },
      }}
    >
      <div className="p-4 bg-white shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold ml-4 mb-2">Filter:</h3>
          <h2 className="ml-4 border-b-2 " style={{
              color: '#5A4098',
              fontFamily: 'General Sans, sans-serif',
              borderBottom: '2px solid #5A4098',
          }} onClick={handleResetAll}>Reset All</h2>
        </div>
        <div className="mb-4">
          {selectedToys.map((filter) => (
            <Tag key={filter} closable onClose={() => handleCloseToys(filter)}>
              {filter}
            </Tag>
          ))}
          {selectedConditions.map((filter) => (
            <Tag key={filter} closable onClose={() => handleCloseCondition(filter)}>
              {filter}
            </Tag>
          ))}
          {selectedRating.map((filter) => (
            <Tag key={filter} closable onClose={() => handleCloseRating(filter)}>
              {filter}
            </Tag>
          ))}
          {selectedPrice.map((filter) => (
            <Tag key={filter} closable onClose={() => handleClosePrice(filter)}>
              {filter}
            </Tag>
          ))}
        </div>

        <Collapse expandIconPosition="end" defaultActiveKey={['1']} items={items} bordered={false} style={{ backgroundColor: 'transparent' }} />
      </div>
    </ConfigProvider>
  );
}

export default Filter;

