# Google Analytics Setup

This project has been configured with Google Analytics 4 (GA4) to track user interactions and website performance.

## Setup

### 1. Environment Variable
Add your Google Analytics Measurement ID to your `.env` file:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

### 2. Files Added/Modified

#### New Files:
- `src/utils/gtag.ts` - Google Analytics utility functions
- `src/types/gtag.d.ts` - TypeScript declarations for gtag
- `GOOGLE_ANALYTICS_README.md` - This documentation

#### Modified Files:
- `src/pages/_document.tsx` - Added GA4 script tags
- `src/pages/_app.tsx` - Added route change tracking
- `src/components/announcement-ticker.tsx` - Added announcement interaction tracking
- `src/components/contact-form.tsx` - Added form submission tracking

## Features

### Automatic Tracking
- **Page Views**: Automatically tracks all page navigation
- **Route Changes**: Tracks client-side route changes in Next.js
- **Initial Page Load**: Tracks the initial page load

### Custom Events

#### Announcement Interactions
```typescript
trackAnnouncementEvent('dismiss', announcementId, title);
```
- **Category**: Announcement
- **Action**: dismiss
- **Label**: Title with ID

#### Form Submissions
```typescript
trackFormSubmission('Contact Form');
```
- **Category**: Form
- **Action**: submit
- **Label**: Form name

#### Button Clicks
```typescript
trackButtonClick('Read More', 'Homepage');
```
- **Category**: Button
- **Action**: click
- **Label**: Button name with location

#### Service Page Views
```typescript
trackServiceView('Breast Augmentation');
```
- **Category**: Service
- **Action**: view
- **Label**: Service name

#### Contact Actions
```typescript
trackContactAction('call', 'phone');
```
- **Category**: Contact
- **Action**: call/email/visit
- **Label**: Contact method

## Usage Examples

### Tracking Custom Events
```typescript
import { event, trackButtonClick, trackFormSubmission } from '@/utils/gtag';

// Custom event
event({
  action: 'download',
  category: 'Resource',
  label: 'Brochure',
  value: 1
});

// Button click
trackButtonClick('Book Appointment', 'Services Page');

// Form submission
trackFormSubmission('Consultation Request');
```

### Tracking in Components
```typescript
import { trackButtonClick } from '@/utils/gtag';

const MyComponent = () => {
  const handleClick = () => {
    trackButtonClick('CTA Button', 'Hero Section');
    // Your click logic here
  };

  return (
    <button onClick={handleClick}>
      Book Now
    </button>
  );
};
```

## Available Functions

### Core Functions
- `pageview(url: string)` - Track page views
- `event({ action, category, label, value })` - Track custom events

### Specialized Functions
- `trackAnnouncementEvent(action, id, title)` - Announcement interactions
- `trackFormSubmission(formName)` - Form submissions
- `trackButtonClick(buttonName, location)` - Button clicks
- `trackServiceView(serviceName)` - Service page views
- `trackContactAction(action, method)` - Contact interactions

## Testing

### Development
1. Open browser developer tools
2. Go to Network tab
3. Filter by "google-analytics" or "collect"
4. Navigate through your site
5. Verify requests are being sent to Google Analytics

### Production
1. Deploy your site
2. Check Google Analytics Real-Time reports
3. Verify events are appearing in real-time

## Privacy Considerations

### GDPR Compliance
- Google Analytics respects user privacy settings
- Users can opt-out through browser settings
- No personally identifiable information is collected

### Data Collection
- Page views and navigation
- User interactions (clicks, form submissions)
- Device and browser information
- Geographic location (country/region level)

## Troubleshooting

### Common Issues

#### GA4 Not Loading
- Check `NEXT_PUBLIC_GA_ID` environment variable
- Verify the ID starts with "G-"
- Check browser console for errors

#### Events Not Tracking
- Ensure gtag is loaded before calling functions
- Check browser network tab for failed requests
- Verify event parameters are correct

#### TypeScript Errors
- Ensure `src/types/gtag.d.ts` is included in your TypeScript config
- Check that all imports are correct

### Debug Mode
To enable debug mode, add this to your browser console:
```javascript
window.gtag('config', 'G-XXXXXXXXXX', {
  debug_mode: true
});
```

## Best Practices

1. **Consistent Naming**: Use consistent event names and categories
2. **Meaningful Labels**: Include descriptive labels for better analysis
3. **Test Thoroughly**: Test all tracking in development and production
4. **Monitor Performance**: Keep an eye on analytics data quality
5. **Respect Privacy**: Follow privacy regulations and user preferences

## Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/gtagjs)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/gtagjs/events)
- [Next.js Analytics Integration](https://nextjs.org/docs/advanced-features/measuring-performance) 