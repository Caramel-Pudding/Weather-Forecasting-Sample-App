

This is a sample app that shows weather for one day. It uses [open sample api](https://openweathermap.org/forecast5#data). 

There's a basic weather forecast page. Here you can navigate between different times of the day to see detailed weather info about that time.And that's pretty much it.

You can see it running [HERE](https://weather-forecasting-sample-app.vercel.app/)!
# Getting Started

Here are some useful CLI commands you can use:

```bash
yarn dev
# Run the dev server on http://localhost:3000
yarn dev:vitals
# Run the dev server on http://localhost:3000 with additional runtime info on Web Vitals in console
yarn build
# Create a production build
yarn start
# Run the dev server with production build on http://localhost:3000
yarn analyze
# Analyze size and module composition of a production build
yarn test
# Run tests
yarn test:watch
# Run tests in watch mode
yarntest:coverage
# Run tests with coverage info
yarn eslint
# Run eslint without erros fixing
yarn eslint:fix
# Run eslint with errors fixing
yarn stylelint
# Run stylelint without erros fixing
yarn stylelint:fix
# Run stylelint with errors fixing
yarn simple-git-hooks:update
# Update git hooks to the new config
```

After running dev or build & start, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Stack

First of all, I should say that I have different experiences with techs mentioned here - more with ones, less with others. So there might be some novice approaches, obvious to those more seasoned with these tools.

Nevertheless, I enjoyed the freedom of choice and tried to select the most appropriate and most interesting tools for me at the moment. 

When I write it, I feel like these instruments combined could create an excellent toolset to create simple, scalable, performant, and maintainable modern frontends.

## [Typescript](https://github.com/microsoft/TypeScript)

Switching from JS to TS some time ago was a real step forward for me. Full & strict type coverage solves so many troubles even before you run your code. No more undefined is not a function. Not even once. It also eases your reading of code by providing de-facto documentation and allows you to conduct refactoring without any doubt or fear.
## [Next.js](https://github.com/vercel/next.js/) (& [React](https://github.com/facebook/react), of course)

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

Currently Next is my framework of choice for fast & scalable frontends. It takes all the best things React has and improves them by giving you SSR, SSG, Client routing, API routes and so much more out of the box.

## [PostCSS](https://github.com/postcss/postcss) & [CSS Modules](https://github.com/css-modules/css-modules)

Post CSS & CSS Modules seem to be the de-facto standard for modern frontends at the moment. Post CSS plugin system which allows you to process your CSS the way you want. You get such things as CSS Modules isolation, auto prefixing for different browsers, linting and more.
## [ESLint](https://github.com/eslint/eslint) & [Prettier](https://github.com/prettier/prettier) & [stylelint](https://github.com/stylelint/stylelint)

These tools (then again, packed with different plugins of your choice) provide you with an automated way to maintain code quality. To be honest, configuring them is the first thing I do on any project. It allows your code to stay consistent, clean, and devoid of the most usual code smells throughout the whole codebase.

## [Jest](https://github.com/facebook/jest) & [React Testing Library](https://github.com/testing-library/react-testing-library)

Then again, probably the de-facto standard for frontend testing. These allow you to cover any part of your application with a whole bunch of different tests, keeping in mind various test- and use-cases. All of it with a lean and obvious API.

## And some other tools...

* [WDYR](https://github.com/welldone-software/why-did-you-render) - To keep track of unnecessary re-renders
* [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) - To set-up git hooks
* [Classnames](https://github.com/JedWatson/classnames) - Well, to join classNames ¯\\\_(ツ)_/¯

# Assumptions I made during work

## API
The endpoint I was given seems to return a very specific set of data - weather forecast for the next 5 days with a period of 3 hours. Which doesn't seem to perfectly fit tasks' requirements for a one-day forecast. I decided to take it as a challenge of sort and wrote data filtering that returns only today's data.

Another thing to mention here is that I of course assumed there could be more data and designed the layout with that in mind. So if you'd like to see how it works you just need to remove that filtering mentioned above.
# Things to mention

## Markup

 The layout is made in accordance with the design provided to me. I've tried to achieve a few things here:
* Make it semantic by using proper HTML tags, 
* Make it adaptive by using flexbox grid and relative sizes,
* Make it a11y-friendly by using HTML necessary HTML attributes, providing and testing keyboard navigation, and keeping color-scheme contrast.

## Packages

Here I need to mention one thing - I like my bundles small & clean. As such, I try to not bring any additional packages when that's not really necessary. This could be a good thing when you try to be small & fast, but could also turn bad when you need to scale swiftly.

In this assignment, there are two things tied to that - working with dates and state management.
During work, it occurred that operations on dates would be needed. I wrote & tested these myself this time. Yet if I had expansion in mind, I would rather refer to some robust library like date-fns for that.

It's pretty much the same about state management. There's only one usage of React.useState in this app. And although this state is rather global, being consumed in different parts of the app and passing callback through layers of props, I decided not to bring Redux or any other global state management library. On one hand, that would help to decouple business logic from the view layer, but on the other, for now, expanding the app with a whole new library seems like an overhead for such a small and simple task.

## SSR

The main advantage of SSR here is taking the rendering load from user to server, greatly improving performance (sometimes). It seems to be a better way in case the user doesn't need to fetch a lot of data exactly after the page load, so I decided to go that way. We're fetching the weather data at the same moment where the server builds our page on the user's demand. If there's a network error or data is somehow corrupted, we will fallback to the error page. As such user receives a prepared page with all necessary data in place and there are no network requests on the client-side.

## Lighthouse

Run it yourself on your local build or on the link above if you'd like :)
(Please, turn off your browser extensions)
# Points for improvement

There's always room to grow, so here a few things i'd improve

* Interactions with the weather API from client-side
* API Response validation
* E2E testing using [Playwright](https://github.com/microsoft/playwright)
* React Error Boundaries
* Alternative layout for mobile devices