[![Codacy Badge](https://app.codacy.com/project/badge/Grade/129bf1165c3a455fadb43ddf5f67e1bd)](https://www.codacy.com/gh/w3bdesign/dfweb-v3/dashboard)
[![codecov](https://codecov.io/gh/w3bdesign/dfweb-v3/branch/master/graph/badge.svg?token=VML3KNGO0N)](https://codecov.io/gh/w3bdesign/dfweb-v3)
[![Maintainability](https://api.codeclimate.com/v1/badges/33332dce96e1dedcf0b7/maintainability)](https://codeclimate.com/github/w3bdesign/dfweb-v3/maintainability)
[![CodeFactor](https://www.codefactor.io/repository/github/w3bdesign/dfweb-v3/badge)](https://www.codefactor.io/repository/github/w3bdesign/dfweb-v3)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_dfweb-v3&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=w3bdesign_dfweb-v3)

# Dfweb.no Portfolio Version 3

Third version of my portfolio website with Next.js, Sanity.io and Typescript.

## Live URL: <https://www.dfweb.no>

> ## Frontend
>
> <img src="https://user-images.githubusercontent.com/45217974/160189236-fa986737-f5a2-42bf-9008-50c59c13a645.png" alt="Dfweb screenshot" />

<br />

> ## Backend
>
> <img src="https://user-images.githubusercontent.com/45217974/163738342-3e8ecc1c-e0d0-4f1d-8fcf-cbbccc31a2d7.png" alt="Sanity backend" />

<br />

> ## Google Lighthouse
>
> <center><img src="https://user-images.githubusercontent.com/45217974/154784575-ec7c0df5-3724-4de0-b8ec-c0ee6ea42f6f.png" alt="Lighthouse score" /></center>

## Features

### General

- Next.js 14 with Typescript
- Sanity.io for fetching project information and frontpage text
- Storybook for component documentation
- Chromatic for visual testing of Storybook components
- Animations with Framer Motion
- React testing library for unit testing
- Cypress for E2E testing
- Filter project display
- Contact form with Email.js
- Display CV with React-PDF
- Polymorphic components
- Automatic sitemap generation (see /api/siteMapGenerator.ts)
- Google rich results for each individual page
- 100% score in Google Lighthouse

### Design

- Fully responsive design tested on all devices
- React Icons for project icons
- Tailwind CSS for styling
- Google fonts with Lato (optimized with @next/font for Next.js)
- Animated reusable input fields

### Accessibility

- WCAG accessibility tested
- Accessibility testing with Cypress Axe
- Accessibility testing with Axe in Storybook for each component

### Devops / Code quality

- Continuous Integration with CircleCI
- CircleCI will warn before deploy if tests fail (setup for React testing library, Cypress and Chromatic)
- Code quality analysis with Codacy, Sonarcloud, LGTM and Codeclimate
- E2E testing with Cypress integrated with CircleCI
- E2E testing with Playwright integrated with Github actions
- Unit testing with Jest and React Testing Library integrated with CircleCI
- Test coverage setup with Codecov
- 98% test coverage with Jest and React testing library

## TODO

- React Hook Form
