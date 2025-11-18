import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface RelatedTopic {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}

interface RelatedTopicsGridProps {
  topics: RelatedTopic[];
  title?: string;
}

const RelatedTopicsGrid: React.FC<RelatedTopicsGridProps> = ({ 
  topics, 
  title = "Related topics" 
}) => {
  const getBadgeColor = (color?: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary';
      case 'green':
        return 'bg-green-500';
      case 'blue':
        return 'bg-blue-500';
      case 'purple':
        return 'bg-purple-500';
      case 'orange':
        return 'bg-orange-500';
      default:
        return 'bg-primary';
    }
  };

  return (
    <section className="pb-50 lg:pb-100">
      <div className="flex w-full containers">
        <div className="flex flex-col gap-40 w-full">
          <h2 className="text-primary md:text-start text-center max-[512px]:!text-[34px]">
            {title.split(' ')[0]}
            <span className="text-header-black"> {title.split(' ').slice(1).join(' ')}</span>
          </h2>
          
          {/* Modern Grid Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
            {topics.map((topic, index) => (
              <Link key={index} href={topic.href} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src={topic.image}
                      width={280}
                      height={350}
                      loading="lazy"
                      alt={topic.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-primary transition-colors duration-300">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                  {topic.badge && (
                    <div className={`absolute top-4 right-4 ${getBadgeColor(topic.badgeColor)} text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {topic.badge}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedTopicsGrid;
