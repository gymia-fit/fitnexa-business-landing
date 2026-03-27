## Description

Create a standalone Virtual Gym application for users who go to gyms that are not Gymia clients. This is a SEPARATE application from the main Gymia platform.

## Architecture

### Two Separate Apps:
1. **Gymia Virtual Gym (Mobile App)** - Users can download for free
2. **Gymia Virtual Gym Admin** - Gym owners can manage their virtual gym

## Features - Mobile App (User-facing)

- [ ] User registration/login
- [ ] Workout tracking
- [ ] AI workout suggestions
- [ ] Progress tracking
- [ ] Exercise library
- [ ] Body metrics tracking

## Features - Admin Panel (Gym Owner)

- [ ] Shop management (products, inventory)
- [ ] Announcements posting
- [ ] Member management
- [ ] Basic analytics

## What's NOT Included (Virtual Gym Limitations)

- ❌ QR code check-ins
- ❌ Gym location/branches
- ❌ Smart equipment integration
- ❌ Class scheduling (basic)

## Difference from Regular Gymia

| Feature | Regular Gymia | Virtual Gym |
|---------|--------------|-------------|
| QR Check-in | ✅ | ❌ |
| Locations | ✅ | ❌ |
| Classes | ✅ | ❌ |
| Shop | ✅ | ✅ |
| Announcements | ✅ | ✅ |
| AI Workouts | ✅ | ✅ |
| Progress Tracking | ✅ | ✅ |

## Testing Approach

1. Unit tests for services
2. Integration tests for APIs
3. E2E tests for user flows
4. Mobile app testing
5. Admin panel testing