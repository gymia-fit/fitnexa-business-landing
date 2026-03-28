---
name: 🔥 Hotfix
description: Critical production fix that needs immediate attention
title: "hotfix: "
labels: ["hotfix", "critical", "needs-triage"]
assignees: ''
---

## ⚠️ Priority
<!-- Mark the priority level -->

- [ ] P1 - Critical (Service down, data loss)
- [ ] P2 - High (Major functionality broken)
- [ ] P3 - Medium (Minor functionality affected)

## Description
<!-- Brief description of the production issue -->

## Impact
<!-- What is the impact on production users? -->

## Root Cause (if known)
<!-- What is causing this issue? -->

## Proposed Fix
<!-- How will you fix this? -->

## Steps
1. Create hotfix branch: `hotfix/issue-description`
2. Fix the issue
3. Create PR to **develop**
4. Create PR to **main** (after develop is merged)
5. Tag release

## Environment
- [ ] Production only

## Additional Context
<!-- Any other critical context -->
