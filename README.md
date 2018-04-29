<h1 align="center">
  <br>
  <a href="http://buff.game"><img src="http://buff.game/wp-content/uploads/2018/02/logo-Buff.png" alt="Lotion" width="200"></a>
  <br>
      ✨ Buff Wallet ✨
  <br>
  <br>
</h1>

An example app for the BUFF blockchain platform.

BUFF application is a wallet and main user application. It listens comunicates with blockchain node and sends transactions. Creates p2p connection with others.
Buff application is neccessary in order to earn money for gaming. For this stage of development it provisioned with OverWolf client and OverWolf based application [buff.tracker](https://github.com/buffgame/buff.tracker). Built on top of electron framework. 

Buff application provides all neccessary functionallity as a wallet, marketplace and it is responsible for game tracking.
Currently it works with [Dota 2](http://www.dota2.com/play/) and [League of Legends](https://play.na.leagueoflegends.com/en_US).

### Features
* View past transactions
* Make transfers to other users
* Update account permissions
* View your profile and profiles of other users
* View your game history, leaderboad and achievements
* Interact with others in chat
* By and sell game goods on the marketplace
<img src="https://preview.ibb.co/cZq0Oc/Home_v2.png" alt="Home_v2" border="0">

You will be able to install and try it after version 1.0 release.

## Get started

* Install all dependencies via `npm install`
* Start project via `npm run develop`

## Get help

We will provide a slack channel soon in order you to be able to contribute.

## View the project

To view the project, these are the routes below. Note that you do not need to be logged in to view the authenticated routes at this time, we are still working on integrating the API and hashing out functionality.

### Unauthenticated routes

* [`/login`](http://localhost:3000/login)
* [`/create-account`](http://localhost:3000/create-account)
* [`/create-account/email`](http://localhost:3000/create-account/email)
* [`/create-account/phone`](http://localhost:3000/create-account/phone)
* [`/create-account/password`](http://localhost:3000/create-account/password)
* [`/about`](http://localhost:3000/about)
* [`/faq`](http://localhost:3000/faq)

### Authenticated routes

* [`/`](http://localhost:3000/) - Dashboard
* [`/transactions`](http://localhost:3000/transactions) - View list of past transactions
* [`/permissions`](http://localhost:3000/permissions) - View and change account permissions
* [`/users`](http://localhost:3000/users) - View a list of users
* [`/user/:id`](http://localhost:3000/user/xyz) - View a specific user
* [`/history`](http://localhost:3000/history) - View game history
* [`/leaderboad`](http://localhost:3000/leaderboad) - View global leadederboard
* [`/marketplace`](http://localhost:3000/marketplace) - View marketplace

## Make a contribution

We will provide contibution quidelines soon.

### License

Currently this repo has no licensing, we look clarify this in the future.
