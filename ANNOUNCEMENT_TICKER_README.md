# Announcement Ticker Component

A vibrant, eye-catching announcement section for web applications with marquee scrolling functionality, responsive design, and modern UI/UX.

## Features

### 🎨 Visual Design
- **Priority-based colors**: High (Red), Medium (Orange), Low (Blue)
- **Gradient backgrounds** with smooth transitions
- **Emoji icons** for different priority levels (🚨📢ℹ️)
- **Modern shadow effects** and rounded corners
- **Dark mode support** with automatic theme detection

### 📱 Responsive Behavior
- **Desktop**: Continuous marquee scrolling from right to left
- **Mobile**: Stacked carousel with slide transitions
- **Adaptive layouts** that work on all screen sizes
- **Touch-friendly controls** for mobile devices

### ⚡ Interactive Features
- **Individual dismiss buttons** (✖) for each announcement
- **Global close button** to hide all announcements
- **Pause/Resume functionality** for marquee scrolling
- **Navigation controls** on mobile (previous/next)
- **Hover effects** that pause marquee on desktop

### 🔧 Technical Features
- **TypeScript support** with comprehensive type definitions
- **Image support** with Next.js Image optimization
- **Expiration dates** for automatic announcement removal
- **Category tags** for better organization
- **Customizable scroll speed** and animation timing
- **Accessibility features** with proper ARIA labels

## Components

### 1. Basic AnnouncementTicker (`announcement-ticker.tsx`)
Simple implementation with core features:
- Marquee scrolling on desktop
- Stacked layout on mobile
- Priority-based styling
- Dismiss functionality

### 2. Advanced AnnouncementTicker (`announcement-ticker-advanced.tsx`)
Enhanced version with additional features:
- Pause/Resume controls
- Mobile navigation
- Expiration date filtering
- Category support
- Theme customization
- Better TypeScript types

## Usage

### Basic Implementation

```tsx
import AnnouncementTicker, { Announcement } from '@/components/announcement-ticker';

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Special Holiday Hours',
    description: 'We will be closed on December 25th and January 1st',
    priority: 'high',
    createdAt: new Date('2024-12-20')
  },
  {
    id: '2',
    title: 'New Treatment Available',
    description: 'Book your consultation for our latest facial treatment!',
    image: '/images/treatment.jpg',
    priority: 'medium',
    createdAt: new Date('2024-12-19')
  }
];

function MyComponent() {
  const handleDismiss = (id: string) => {
    // Handle announcement dismissal
    console.log('Dismissed announcement:', id);
  };

  return (
    <AnnouncementTicker 
      announcements={announcements}
      onDismiss={handleDismiss}
      className="rounded-lg"
    />
  );
}
```

### Advanced Implementation

```tsx
import AnnouncementTickerAdvanced, { Announcement } from '@/components/announcement-ticker-advanced';

const advancedAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Emergency Maintenance',
    description: 'System maintenance scheduled for tonight',
    priority: 'high',
    category: 'System',
    expiresAt: new Date('2024-12-25'),
    createdAt: new Date('2024-12-20')
  }
];

function AdvancedComponent() {
  return (
    <AnnouncementTickerAdvanced 
      announcements={advancedAnnouncements}
      onDismiss={handleDismiss}
      autoScroll={true}
      scrollSpeed={25}
      showControls={true}
      maxHeight="80px"
      theme="auto"
      className="rounded-lg"
    />
  );
}
```

## Props

### Basic Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `announcements` | `Announcement[]` | `[]` | Array of announcements to display |
| `onDismiss` | `(id: string) => void` | `undefined` | Callback when announcement is dismissed |
| `className` | `string` | `''` | Additional CSS classes |

### Advanced Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `announcements` | `Announcement[]` | `[]` | Array of announcements to display |
| `onDismiss` | `(id: string) => void` | `undefined` | Callback when announcement is dismissed |
| `className` | `string` | `''` | Additional CSS classes |
| `autoScroll` | `boolean` | `true` | Enable automatic scrolling |
| `scrollSpeed` | `number` | `30` | Marquee scroll speed in seconds |
| `showControls` | `boolean` | `true` | Show pause/close controls |
| `maxHeight` | `string` | `'auto'` | Maximum height of the component |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'auto'` | Theme mode |

## Announcement Interface

```typescript
interface Announcement {
  id: string;                    // Unique identifier
  title: string;                 // Announcement title
  description: string;           // Announcement description
  image?: string;               // Optional image URL
  priority?: 'low' | 'medium' | 'high';  // Priority level
  createdAt: Date;              // Creation timestamp
  expiresAt?: Date;             // Optional expiration date
  category?: string;            // Optional category tag
  link?: string;                // Optional link URL
}
```

## Styling

### CSS Variables
The component uses CSS custom properties for theming:

```css
:root {
  --primary: #ea622f;           /* Primary brand color */
  --secondary: #fff5e6;         /* Secondary color */
  --white: #ffffff;             /* White color */
  --black: #0f0f0f;             /* Black color */
}
```

### Tailwind Classes
The component is built with Tailwind CSS and uses:
- Gradient backgrounds (`bg-gradient-to-r`)
- Responsive breakpoints (`md:`, `lg:`)
- Flexbox layouts (`flex`, `items-center`)
- Transitions (`transition-colors`, `duration-200`)
- Shadows (`shadow-lg`)

## Animations

### Desktop Marquee
```css
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
```

### Mobile Slide
```css
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
```

## Browser Support

- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, CSS Animations

## Performance

- **Optimized animations** using CSS transforms
- **Lazy loading** for images with Next.js Image component
- **Efficient re-renders** with React.useCallback
- **Memory management** with proper cleanup in useEffect

## Accessibility

- **ARIA labels** for all interactive elements
- **Keyboard navigation** support
- **Screen reader** friendly announcements
- **High contrast** color schemes
- **Focus indicators** for interactive elements

## Future Enhancements

- [ ] API integration for dynamic content
- [ ] Local storage for dismissed announcements
- [ ] Push notifications support
- [ ] Analytics tracking
- [ ] Custom animation presets
- [ ] Multi-language support
- [ ] Announcement scheduling
- [ ] Rich text formatting
- [ ] Video announcement support

## Demo

Visit `/announcement-demo` to see the component in action with interactive controls and sample data.

## License

This component is part of the Dr. Soma website project and follows the same licensing terms. 