# WYR - *Where You Are*

Bringing services to you, even if you don't have a formal address.
For more info visit our project site: https://buildforsdg.github.io/Team-199/

## Table of contents

- [The challenge](#the-challenge)
- [Our solution](#our-solution)
- [Setup and configuration of web application](#setup-and-configuration-of-web-application)
  * [Hints](#hints)
- [About Us](#about-us)
-  [Feedback and acknowledgements](#feedback-and-acknowledgements)

##  The challenge

So many Africans do not live in formal housing and therefore also don’t have a formal address.

This excludes them from simple services such as getting items delivered to their door, to critical services if they need to be found by emergency services. 
Therefore WYR seeks to solve such a problem in a very simple way using [what3words](https://what3words.com/).

## Our solution

Our solution has the possibility of being applied ot various scenarios such as logistics, tourism and in this example, emergence services.

The structure of the web application has three areas: 

* Home (landing page)
* Contact us
* About us

When a user navigates to the home page, he can be able to select which of the three emergency services they require. Those are;

* Police
* Fire-rescue
* Paramedics

When the user clicks on the _"Report emergency"_-button, it takes them to the exact location they are, without have to supply additional information such as street addresses or coordinates. This means that they can get quicker access to the help they despirately need.

## Setup and configuration of web application

1. Install npm or yarn if you dont have any of them already installed. We recommend Yarn though.
1. After clonning the repo to your local machine and moving into the cloned folder, run ```yarn install``` to get started by installing dependencies.
1. ```src/index.js``` is the entry to the project and source code should go into the src folder.
1. All tests should be written in the `tests' folder. There's a sample in there.
1. This starter uses Parcel as the bundler. It is much simpler that WebPack and the others

### Hints

Here are some additional information that is usefull to have:

* Run ```npm install``` or ```yarn install`` to get started. We'll assume you are using Yarn.
* Install additional dependencies: ```yarn add <dependency-name> [-D]```
* Run tests: ```yarn test```
* Run tests with test coverage info: ```yarn test:cover```
* Check the codebase for proper syntax and formatting compliance: ```yarn lint```
* Run your app in local dev mode: ```yarn start```. This puts the bundled app in a dist folder, set up a local web server at ```localhost:1234```, and continues to watch for your code changes which it syncs with the local server. This means if you loaded the app in a browser, it will auto-refresh as you code along. Feel free to use whatever bundler best meets your needs. Parcel was only added as a sample and for those looking for a simple but effective solution to the hassle of bundlers.

## About Us
We are a group of developers that entered Facebook Developer Circles and Andela’s challenge called [Build for Sustainable Development Goals](https://buildforsdg.andela.com/) or #BuildForSDG for short. For the innovation phase, we were grouped as [Team-199](https://buildforsdg.github.io/Team-199/whoweare/) and to come up with a solution to address social issues.

 ### **Technical Team Lead:** Brian Nduhui ([Github](https://github.com/Brian-Nduhiu) / [LinkedIn](https://www.linkedin.com/in/brian-nduhiu-358b07121))

 ### **Front-End Developer:** Amon Namaara ([Github](https://github.com/AmonKats-dev) / [LinkedIn](https://www.linkedin.com/in/amon-kats-56137b162))

 ### **Back-End Developer:** Kolawole Olulana ([Github](https://github.com/kolawoletech) / [LinkedIn](https://www.linkedin.com/in/kolawole-olulana-25815622))

### **Idea generator and project site:** Carike Blignaut-Staden  ([Github](https://github.com/carike) / [LinkedIn](https://www.linkedin.com/in/carike))


## Feedback and acknowledgements

Did this project made you think about other solutions for the African continent? Or perhaps you "forked" this repo and build something awesome?

Please let us know and if you can please reference the repo and share away. We can then event mention it on our site!

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 217.205 217.205" style="enable-background:new 0 0 217.205 217.205;" xml:space="preserve">
<g>
	<path d="M167.631,101.102H49.574c-16.216,0-29.408-13.199-29.408-29.422c0-16.211,13.192-29.399,29.408-29.399h73.789
		c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H49.574c-24.486,0-44.408,19.917-44.408,44.399
		c0,24.494,19.922,44.422,44.408,44.422h118.057c16.216,0,29.408,13.199,29.408,29.423c0,16.211-13.192,29.399-29.408,29.399H93.205
		c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h74.426c24.486,0,44.408-19.917,44.408-44.399
		C212.039,121.03,192.117,101.102,167.631,101.102z"/>
	<path d="M48.516,130.001c-17.407,0-31.568,14.162-31.568,31.568c0,26.865,25.192,52.367,26.265,53.439
		c1.407,1.407,3.314,2.197,5.304,2.197c1.989,0,3.897-0.79,5.304-2.197c1.072-1.073,26.263-26.574,26.263-53.439
		C80.082,144.163,65.922,130.001,48.516,130.001z M48.516,198.357c-6.477-7.995-16.568-22.713-16.568-36.788
		c0-9.136,7.433-16.568,16.568-16.568c9.135,0,16.566,7.433,16.566,16.568C65.082,175.644,54.991,190.362,48.516,198.357z"/>
	<path d="M168.053,87.202c1.919,0,3.838-0.732,5.302-2.195c1.073-1.072,26.278-26.573,26.278-53.44
		C199.633,14.161,185.466,0,168.053,0c-17.407,0-31.568,14.161-31.568,31.566c0,26.866,25.192,52.367,26.266,53.439
		C164.214,86.47,166.133,87.202,168.053,87.202z M168.053,15c9.143,0,16.58,7.432,16.58,16.566c0,14.076-10.1,28.796-16.579,36.79
		c-6.476-7.994-16.569-22.713-16.569-36.79C151.484,22.432,158.917,15,168.053,15z"/>
</g>
<g>
</svg>
