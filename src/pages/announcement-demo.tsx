import React from 'react';
import Head from 'next/head';
import AnnouncementDemo from '@/components/announcement-demo';

const AnnouncementDemoPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Announcement Ticker Demo | Dr. Soma</title>
        <meta name="description" content="Test page for announcement ticker component" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8">
          <AnnouncementDemo />
        </div>
      </div>
    </>
  );
};

export default AnnouncementDemoPage; 