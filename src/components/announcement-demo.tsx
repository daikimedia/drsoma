import React from 'react';
import AnnouncementTicker, { Announcement } from './announcement-ticker';

const AnnouncementDemo: React.FC = () => {
  // Test data to verify the component works
  const testAnnouncements: Announcement[] = [
    {
      id: '1',
      title: 'Test Announcement 1',
      content: 'This is a test description for announcement 1. It should be visible below the title.',
      priority: 'high',
      status: 'published',
      created_at: '2024-12-20T10:00:00Z'
    },
    {
      id: '2',
      title: 'Test Announcement 2',
      content: 'This is a test description for announcement 2. It should also be visible below the title.',
      priority: 'medium',
      status: 'published',
      created_at: '2024-12-19T14:30:00Z'
    },
    {
      id: '3',
      title: 'Test Announcement 3',
      content: 'This is a test description for announcement 3. This should be the third visible description.',
      priority: 'low',
      status: 'published',
      created_at: '2024-12-18T09:15:00Z'
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Announcement Ticker Demo</h2>
      <p className="mb-4 text-gray-600">This is a test to verify the announcement ticker is working correctly.</p>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Test Data:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(testAnnouncements, null, 2)}
        </pre>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Announcement Ticker Component:</h3>
        <AnnouncementTicker 
          announcements={testAnnouncements}
          className="w-full"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Individual Announcement Details:</h3>
        {testAnnouncements.map((announcement, index) => (
          <div key={announcement.id} className="mb-4 p-4 border rounded">
            <h4 className="font-semibold">Announcement {index + 1}:</h4>
            <p><strong>Title:</strong> {announcement.title}</p>
            <p><strong>Content:</strong> {announcement.content || announcement.description}</p>
            <p><strong>Priority:</strong> {announcement.priority}</p>
            <p><strong>Content Length:</strong> {(announcement.content || announcement.description || '').length} characters</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementDemo; 