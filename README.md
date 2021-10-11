# README

<p align="center">
  <img src="https://github.com/omarluq/ExpectoStayLonger/blob/main/app/assets/images/logo3.png" />
</p>

#### [ExpectoStayLonger](https://expectostaylonger.herokuapp.com/?#/) is an airbnb inspired clone with a Harry Potter fantasy theme, the site was developed using a ROR/React-Redux stack.


<p align="center">
  <img src="https://github.com/omarluq/ExpectoStayLonger/blob/main/app/assets/images/screenshot1.png" />
</p>

<p align="center">
  <img src="https://github.com/omarluq/ExpectoStayLonger/blob/main/app/assets/images/screenshot2.png" />
</p>

## Installation instructions
 * Clone this repo `git clone https://github.com/omarluq/ExpectoStayLonger.git`
 * Ensure to have postgreSQL installed and running 
 * Install NPM packages `npm install`
 * Install Ruby gems `bundle install`
 * Create the Database `rails db:create`
 * Setup the datebase `rails db:setup`
 * Start webpack bundlers `npm run start`
 * Start your local server `rails s`

## Technologies used
 * Ruby on Rails for backend 
 * PostgreSQL for DB 
 * JBuilder 
 * React-Redux for frontend
 * JQuery
 * Mapbox API
 * React-date-range API
 * AWS

## Features
 * Create a personal account 
 * Log in using our demo user 
 * Create a new listing and upload pictures with it (up to 4 pictures)
 * Reserve a listing / Cancel reservations 

## Development
  We made sure that a listing can only be booked on available dates by blocking the reserved ones, the below code shows you how we did that 
  ``` Javascript 
      setDateRange() {
        let that = this;
          this.props.bloackedDates.forEach((range) => {
          let start = new Date(range[0]);
          let end = new Date(range[1]);
          let diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
            for (let i = 0; i <= diff; i++) {
              let temp = `${start.getFullYear()}/${start.getMonth() + 1}/${start.getDate() + 1}`;
              that.dateRange.push(start);
              start = new Date(temp);
            }
          });
      }
  ```

## found a 🐛 ?
 Feel free to file a new issue with a respective title and description on ExpectoStatyLonger repository.
 
 
