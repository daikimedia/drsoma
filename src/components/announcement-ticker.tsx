import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface Announcement {
  id: string;
  title: string;
  description?: string; // Keep for backward compatibility
  content?: string; // API returns 'content' instead of 'description'
  priority?: 'low' | 'medium' | 'high';
  status?: string;
  created_at: string;
  updated_at?: string;
  expiresAt?: string;
  companyId?: string;
  asset?: { 
    url?: string;
    altText?: string;
    imageName?: string;
    imageInfo?: {
      key: string;
      mimeType: string;
      originalName: string;
      size: number;
      url: string;
    };
  } | null;
  created_by?: {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
  } | null;
  updated_by?: {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
  } | null;
}

interface AnnouncementTickerProps {
  announcements: Announcement[];
  className?: string;
}

const AnnouncementTicker: React.FC<AnnouncementTickerProps> = ({
  announcements,
  className = ''
}) => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  // Auto-advance to next announcement
  useEffect(() => {
    if (announcements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentAnnouncementIndex(prev => (prev + 1) % announcements.length);
    }, 5000); // Change announcement every 5 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  const getPriorityColor = (priority: string = 'medium') => {
    switch (priority) {
      case 'high':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'medium':
        return 'bg-gradient-to-r from-primary to-orange-500';
      case 'low':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default:
        return 'bg-gradient-to-r from-primary to-orange-500';
    }
  };

  const getPriorityIcon = (priority: string = 'medium') => {
    switch (priority) {
      case 'high':
        return '🚨';
      case 'medium':
        return '📢';
      case 'low':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  // Helper function to get image URL
  const getImageUrl = (announcement: Announcement): string | null => {
    if (announcement.asset?.imageInfo?.url) return announcement.asset.imageInfo.url;
    if (announcement.asset?.url) return announcement.asset.url;
    return null;
  };

  if (!announcements || announcements.length === 0) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg shadow-sm ${className}`}>
        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
          <span className="text-lg mr-2">📢</span>
          <span className="font-medium">No Announcements</span>
        </div>
      </div>
    );
  }

  const currentAnnouncement = announcements[currentAnnouncementIndex];
  const imageUrl = getImageUrl(currentAnnouncement);

  // Get the description from content field (API) or description field (fallback)
  const getDescription = (announcement: Announcement) => {
    return announcement?.content || announcement?.description || 'No description available';
  };

  const currentDescription = getDescription(currentAnnouncement);

  // Debug logging for current announcement (can be removed in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('Current announcement details:', {
      title: currentAnnouncement?.title,
      content: currentAnnouncement?.content,
      description: currentAnnouncement?.description,
      finalDescription: currentDescription,
      descriptionLength: currentDescription?.length,
      hasDescription: !!currentDescription
    });
  }

  return (
    <div className={`relative overflow-hidden ${getPriorityColor(currentAnnouncement?.priority)} shadow-lg rounded-lg transition-all duration-500 ${className}`}>
      {/* Desktop Single Announcement */}
      <div className="hidden md:block">
        <div className="py-4 px-6 text-white font-medium">
          {/* First Row: Title and Count */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-xl mr-3">{getPriorityIcon(currentAnnouncement?.priority)}</span>
              <span className="font-semibold text-lg">{currentAnnouncement?.title}</span>
            </div>
            {announcements.length > 1 && (
              <div className="flex items-center space-x-1 text-white/60 text-sm">
                <span>{currentAnnouncementIndex + 1}</span>
                <span>/</span>
                <span>{announcements.length}</span>
              </div>
            )}
          </div>
          
          {/* Second Row: Description */}
          <div className="flex items-start">
            <div className="flex-1 pr-3">
              <span className="text-white leading-relaxed text-base block min-h-[20px]">
                {currentDescription}
              </span>
            </div>
            {imageUrl && (
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                <Image
                  src={imageUrl}
                  alt={currentAnnouncement.title}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Single Announcement */}
      <div className="md:hidden">
        <div className="py-4 px-6 text-white font-medium">
          {/* First Row: Title and Count */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center flex-1 min-w-0">
              <span className="text-lg mr-3 flex-shrink-0">{getPriorityIcon(currentAnnouncement?.priority)}</span>
              <span className="font-semibold text-base truncate">{currentAnnouncement?.title}</span>
            </div>
            {announcements.length > 1 && (
              <div className="flex items-center space-x-1 text-white/60 text-xs ml-3 flex-shrink-0">
                <span>{currentAnnouncementIndex + 1}</span>
                <span>/</span>
                <span>{announcements.length}</span>
              </div>
            )}
          </div>
          
          {/* Second Row: Description */}
          <div className="flex items-start">
            <div className="flex-1 pr-2">
              <span className="text-white text-sm leading-relaxed block min-h-[16px]">
                {currentDescription}
              </span>
            </div>
            {imageUrl && (
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                <Image
                  src={imageUrl}
                  alt={currentAnnouncement.title}
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementTicker; 