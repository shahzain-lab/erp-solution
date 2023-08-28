## Project setup

To setup the project locall, you will need to do some installations
* [Nodejs](https://nodejs.org/en)
* [Amplify Cli](https://docs.amplify.aws/cli/start/install/) - After installation, run `amplify configure` and provide accessKey and secretKey.
* [Git](https://git-scm.com/downloads) 



## Getting Started

First, install all packages

```bash
npm i
# or
npm install
```
Now, clone amplify from cloud. make sure you are in right git branch .
```bash
amplify pull --appId APP_ID --envName ENV_NAME
```
This will,
* Authenticate local application with AWS account
* Clone the configuration from cloud
* Download all backend files from cloud, if you hit Yes to `edit backend now` option.

You can check environemnt status by running command 
```bash
amplify status
```
If you are in *develop* branch, amplify environment should be *develop*. otherwise, switch to required env by running
```bash
amplify checkout env ENV_NAME
```
Run the app locally,
```bash
npm run dev
```

## Branch checkout and CI/CD

The project is using CI/CD pipeline for fullstack deployment. That's mean, avoid running command `amplify push` on any backend change.

Checkout to other branch, steps to follow
```bash
git checkout BRANCH_NAME
```
Checkout to required amplify env
```bash
amplify checkout env ENV_NAME
```

If you have local changes to push

Stach all changes 
```bash
git add .
```
Commit stashed changes 
```bash
git commit -m "YOUR_COMMIT"
```
Push to github
```bash
git push
```

## Learn More
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [Amplify docs](https://docs.amplify.aws/) here.
