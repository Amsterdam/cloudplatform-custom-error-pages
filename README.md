<!-- @license CC0-1.0 -->

# Cloudplatform custom error pages

This repository is used to generate the generic static error pages for the Azure Application Gateway.
You can fork this repository to generate different static error pages for your application.

## Local development

### Install prerequisites

You need to have the following tools installed to run this project locally:

- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org/en/)

### Run local server

`npm run dev`

## Build pages

`npm run build`

## Generated error pages

The follow error pages are generated. The links here are the location of these pages on your local dev server.

- [400](http://127.0.0.1:4321/400)
- [401](http://127.0.0.1:4321/401)
- [403](http://127.0.0.1:4321/403)
- [404](http://127.0.0.1:4321/404)
- [408](http://127.0.0.1:4321/408)
- [413](http://127.0.0.1:4321/413)
- [499](http://127.0.0.1:4321/499)
- [500](http://127.0.0.1:4321/500)
- [502](http://127.0.0.1:4321/502)
- [504](http://127.0.0.1:4321/504)

## Stack

This repo uses [Astro](https://astro.build/) to generate the pages.
Astro allows you to generate completely static, JavaScript-free pages, which makes sense for static error pages.
The pages themselves are created using [Amsterdam Design System](https://designsystem.amsterdam/) React components.

## Code of conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
Read [our Code of Conduct](https://github.com/Amsterdam/.github/blob/main/CODE_OF_CONDUCT.md) if you haven’t already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md) or higher.
Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode).
