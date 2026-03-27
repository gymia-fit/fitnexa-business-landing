## Description

Test the Squads/Teams feature for managing fitness teams/groups. This is separate from the Community feature.

## Features to Test

- [ ] Create a new squad/team
- [ ] Join a squad
- [ ] Leave a squad
- [ ] Squad admin management
- [ ] Squad member list
- [ ] Squad chat/messaging
- [ ] Squad invitations
- [ ] Squad privacy settings

## Difference from Community

- **Community**: General social features, feed, posts
- **Squads**: Focused team/groups with tighter membership, often used for challenges together

## Testing Approach

1. Unit tests for SquadService
2. Integration tests for SquadController
3. E2E tests for squad management flow
4. WebSocket tests for real-time squad features

## Notes

This feature was found in the local C:\projects\FitNexa codebase (squad-service). The user clarified this should be part of gym-service, separate from Community.