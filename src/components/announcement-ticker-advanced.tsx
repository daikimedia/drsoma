import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

export interface Announcement {
  id: string;
  title: string;
  description: string;
  image?: string;
  priority?: 'low' | 'medium' | 'high';
  createdAt: Date;
  expiresAt?: Date;
  category?: string;
  link?: string;
}

interface AnnouncementTickerProps {
  announcements: Announcement[];
  onDismiss?: (id: string) => void;
  className?: string;
  autoScroll?: boolean;
  scrollSpeed?: number;
  showControls?: boolean;
  maxHeight?: string;
  theme?: 'light' | 'dark' | 'auto';
}

const AnnouncementTickerAdvanced: React.FC<AnnouncementTickerProps> = ({
  announcements,
  onDismiss,
  className = '',
  autoScroll = true,
  scrollSpeed = 30,
  showControls = true,
  maxHeight = 'auto',
  theme = 'auto'
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Filter out expired announcements
  const activeAnnouncements = announcements.filter(announcement => {
    if (!announcement.expiresAt) return true;
    return new Date() < announcement.expiresAt;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const checkDarkMode = () => {
      if (theme === 'auto') {
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      } else {
        setIsDarkMode(theme === 'dark');
      }
    };
    
    checkMobile();
    checkDarkMode();
    
    window.addEventListener('resize', checkMobile);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, [theme]);

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile || !autoScroll || isPaused || activeAnnouncements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % activeAnnouncements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, autoScroll, isPaused, activeAnnouncements.length]);

  const getPriorityColor = useCallback((priority: string = 'medium') => {
    const baseColors = {
      high: 'from-red-500 to-pink-500',
      medium: 'from-primary to-orange-500',
      low: 'from-blue-500 to-cyan-500'
    };
    
    const darkColors = {
      high: 'from-red-600 to-pink-600',
      medium: 'from-orange-600 to-red-500',
      low: 'from-blue-600 to-cyan-600'
    };

    const colors = isDarkMode ? darkColors : baseColors;
    return `bg-gradient-to-r ${colors[priority as keyof typeof colors] || colors.medium}`;
  }, [isDarkMode]);

  const getPriorityIcon = useCallback((priority: string = 'medium') => {
    const icons = {
      high: '🚨',
      medium: '📢',
      low: 'ℹ️'
    };
    return icons[priority as keyof typeof icons] || icons.medium;
  }, []);

  const handleDismiss = useCallback((id: string) => {
    onDismiss?.(id);
  }, [onDismiss]);

  const handlePause = useCallback(() => {
    setIsPaused(!isPaused);
  }, [isPaused]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => 
      prev === 0 ? activeAnnouncements.length - 1 : prev - 1
    );
  }, [activeAnnouncements.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % activeAnnouncements.length);
  }, [activeAnnouncements.length]);

  if (!activeAnnouncements || activeAnnouncements.length === 0) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-800 py-3 px-4 rounded-lg shadow-sm ${className}`}>
        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
          <span className="text-lg mr-2">📢</span>
          <span className="font-medium">No Announcements</span>
        </div>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <div 
      className={`relative overflow-hidden ${getPriorityColor(activeAnnouncements[0]?.priority)} shadow-lg ${className}`}
      style={{ maxHeight }}
    >
      {/* Desktop Marquee */}
      <div className="hidden md:block">
        <div 
          ref={marqueeRef}
          className="flex items-center py-3 px-4 text-white font-medium"
          style={{
            animation: isPaused ? 'none' : `marquee ${scrollSpeed}s linear infinite`,
          }}
        >
          {activeAnnouncements.map((announcement) => (
            <div key={announcement.id} className="flex items-center mr-16 whitespace-nowrap">
              <span className="text-xl mr-3">{getPriorityIcon(announcement.priority)}</span>
              <div className="flex items-center">
                <span className="font-semibold mr-3">{announcement.title}</span>
                <span className="opacity-90">- {announcement.description}</span>
                {announcement.image && (
                  <div className="ml-3 w-8 h-8 rounded-full overflow-hidden bg-white/20">
                    <Image
                      src={announcement.image}
                      alt={announcement.title}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                )}
                {announcement.category && (
                  <span className="ml-3 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {announcement.category}
                  </span>
                )}
              </div>
              {onDismiss && (
                <button
                  onClick={() => handleDismiss(announcement.id)}
                  className="ml-4 text-white/80 hover:text-white transition-colors duration-200"
                  aria-label="Dismiss announcement"
                >
                  <span className="text-lg">✖</span>
                </button>
              )}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {activeAnnouncements.map((announcement) => (
            <div key={`${announcement.id}-duplicate`} className="flex items-center mr-16 whitespace-nowrap">
              <span className="text-xl mr-3">{getPriorityIcon(announcement.priority)}</span>
              <div className="flex items-center">
                <span className="font-semibold mr-3">{announcement.title}</span>
                <span className="opacity-90">- {announcement.description}</span>
                {announcement.image && (
                  <div className="ml-3 w-8 h-8 rounded-full overflow-hidden bg-white/20">
                    <Image
                      src={announcement.image}
                      alt={announcement.title}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                )}
                {announcement.category && (
                  <span className="ml-3 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {announcement.category}
                  </span>
                )}
              </div>
              {onDismiss && (
                <button
                  onClick={() => handleDismiss(announcement.id)}
                  className="ml-4 text-white/80 hover:text-white transition-colors duration-200"
                  aria-label="Dismiss announcement"
                >
                  <span className="text-lg">✖</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="py-3 px-4 relative">
          {activeAnnouncements.map((announcement, index) => (
            <div 
              key={announcement.id}
              className={`flex items-center justify-between text-white font-medium transition-all duration-500 ${
                index === currentIndex ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full absolute'
              }`}
              style={{
                left: index === currentIndex ? '0' : '100%',
                position: index === currentIndex ? 'relative' : 'absolute',
                width: '100%'
              }}
            >
              <div className="flex items-center flex-1 min-w-0">
                <span className="text-xl mr-3 flex-shrink-0">{getPriorityIcon(announcement.priority)}</span>
                <div className="flex items-center min-w-0 flex-1">
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold truncate">{announcement.title}</div>
                    <div className="opacity-90 text-sm truncate">{announcement.description}</div>
                    {announcement.category && (
                      <span className="inline-block mt-1 px-2 py-1 bg-white/20 rounded-full text-xs">
                        {announcement.category}
                      </span>
                    )}
                  </div>
                  {announcement.image && (
                    <div className="ml-3 w-8 h-8 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                      <Image
                        src={announcement.image}
                        alt={announcement.title}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              {onDismiss && (
                <button
                  onClick={() => handleDismiss(announcement.id)}
                  className="ml-4 text-white/80 hover:text-white transition-colors duration-200 flex-shrink-0"
                  aria-label="Dismiss announcement"
                >
                  <span className="text-lg">✖</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute top-2 right-2 flex items-center space-x-2">
          {isMobile && activeAnnouncements.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Previous announcement"
              >
                <span className="text-sm">◀</span>
              </button>
              <span className="text-white/60 text-xs">
                {currentIndex + 1}/{activeAnnouncements.length}
              </span>
              <button
                onClick={handleNext}
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Next announcement"
              >
                <span className="text-sm">▶</span>
              </button>
            </>
          )}
          <button
            onClick={handlePause}
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label={isPaused ? "Resume announcements" : "Pause announcements"}
          >
            <span className="text-sm">{isPaused ? '▶' : '⏸'}</span>
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Close all announcements"
          >
            <span className="text-sm">✖</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AnnouncementTickerAdvanced; 