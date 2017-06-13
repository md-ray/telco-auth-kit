# telco-auth-kit

This is a library of authentication using telco capabilities (currently implemented using SMS OTP/One time password). This is very similar, but very limited version of Facebook Account Kit

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

- NodeJs version 6.0
- MongoDB as data store
- Twilio Account for sending SMS (you can use trial version for testing)

### Installing


```
git clone https://github.com/saviourcat/telco-auth-kit.git
npm install
```

Create .env file for Twilio configuration. The content will be like
```
CLIENT_ID=xxx
CLIENT_SECRET=xxx
```
To run the apps (using the hardcoded port 3000)
```
node apps.js
```

## Running the tests

N/A

## Deployment

N/A

## Built With

* Express - The NodeJS web framework used
* And others. see package.json

## Contributing

Contact me

## Authors

* **Muhammad Rayhan** - *Initial work* - [My Github](https://github.com/saviourcat) - [My website](http://mdray.id)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
