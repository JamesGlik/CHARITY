import React from 'react';
import RecentCauses from '../RecentCauses/RecentCauses';

const Example = () => {
  const causes = [
    {
      category: 'Water',
      title: 'Bring together people who care about a cause',
      raised: 4373,
      goal: 10000,
      imageSrc: '/recent_causes_image.png',
    },
    {
      category: 'Food',
      title: 'Together people who care about a cause',
      raised: 5200,
      goal: 7000,
      imageSrc: '/recent_causes_image.png',
    },
    {
      category: 'Charity',
      title: 'People who care about a cause',
      raised: 27890,
      goal: 50000,
      imageSrc: '/recent_causes_image.png',
    },
  ];

  return (
    <div>
      <RecentCauses causes={causes} />
    </div>
  );
};

export default Example;
