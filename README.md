# Font Generator

 
## Installation

To set up the Font Generator project locally, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/seadfeng/font-generator.git
cd font-generator
```

2. Install dependencies:

```sh
npm install
# or
yarn install
# or
pnpm install
```

## Usage Guide

### Running the Development Server

To start the development server, run one of the following commands:

```sh
npm run dev
# or
# yarn dev
or
# pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deploy to Cloudflare Pages

### Local Deploy

Simple Deployment

```sh
# install wrangler
npm install -g wrangler

# Cloudflare Login 
wrangler login

# Deploy to Cloudflare Pages
npm run deploy
```


## Docker Image

```sh
docker pull seadfeng/font-generator
docker run -p 3000:3000 seadfeng/font-generator
```

## Resource
 
`src/fonts.ts` Source of Unicode font:

- [unicode-formatter](https://github.com/DenverCoder1/unicode-formatter)
- [yaytext.com](https://yaytext.com/)

## Contributing

We welcome contributions to the Font Generator project. Please feel free to submit issues, feature requests, or pull requests.

## License

[MIT License](MIT-LICENSE)