[![Codacy Badge](https://app.codacy.com/project/badge/Grade/129bf1165c3a455fadb43ddf5f67e1bd)](https://www.codacy.com/gh/w3bdesign/dfweb-v3/dashboard?utm_source=github.com&utm_medium=referral&utm_content=w3bdesign/dfweb-v3&utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/w3bdesign/dfweb-v3/branch/master/graph/badge.svg?token=VML3KNGO0N)](https://codecov.io/gh/w3bdesign/dfweb-v3)
![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade-score/dfweb.no)
[![Maintainability](https://api.codeclimate.com/v1/badges/ffcd837a61db13b9630e/maintainability)](https://codeclimate.com/github/w3bdesign/dfweb-v3/maintainability)
[![DeepSource](https://deepsource.io/gh/w3bdesign/dfweb-v3.svg/?label=active+issues&token=xU1k2KJL7peEGSzJkuYYEuw5)](https://deepsource.io/gh/w3bdesign/dfweb-v3/?ref=repository-badge)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://github.com/w3bdesign/dfweb-v3)

# Dfweb Portfolio Version 3

Third version of my portfolio website with Next.js and Typescript.

## Live URL: <https://www.dfweb.no/>

> ## Frontend
>
> <img src="https://user-images.githubusercontent.com/45217974/160189236-fa986737-f5a2-42bf-9008-50c59c13a645.png" alt="Dfweb screenshot" />

<br />

> ## Backend
>
> <img src="https://user-images.githubusercontent.com/45217974/163738342-3e8ecc1c-e0d0-4f1d-8fcf-cbbccc31a2d7.png" alt="Sanity backend" />

## Features

### General

-   Next.js 12 with Typescript
-   Sanity.io for fetching project information and frontpage text
-   Storybook for component documentation
-   Chromatic for visual testing of Storybook components
-   Animations with Framer Motion
-   React testing library for unit testing
-   Cypress for E2E testing
-   Filter project display
-   Contact form with Email.js
-   Display CV with React-PDF
-   Automatic sitemap generation (see /api/siteMapGenerator.ts)
-   Google rich results for each individual page
-   100% score in Google Lighthouse

### Design

-   Fully responsive design tested on all devices
-   React Icons for project icons
-   Tailwind CSS for styling
-   Google fonts with Lato (optimized for Next.js)

### Accessibility

-   WCAG accessibility tested
-   Cypress setup with Cypress Axe for automatic accessibility testing

### Devops / Code quality

-   Continuous Integration with CircleCI
-   CircleCI will warn before deploy if tests fail (setup for React testing library, Cypress and Chromatic)
-   Code quality analysis with Codacy, Sonarcloud, Deepscan, LGTM and Codeclimate
-   E2E testing with Cypress integrated with CircleCI
-   Unit testing with Jest and React Testing Library integrated with CircleCI
-   Test coverage setup with Codecov

> ### Google Lighthouse score
>
> <center><img src="https://user-images.githubusercontent.com/45217974/154784575-ec7c0df5-3724-4de0-b8ec-c0ee6ea42f6f.png" alt="Lighthouse score" /></center>

## TODO

-   Look into issues
-   Redesign site (long term)
