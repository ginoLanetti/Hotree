

# Hotree    

## Getting Started

  Please make sure that you have:

-  [Node.js](http://www.dropwizard.io/1.0.2/docs/) istalled. Since _npm_ has been used for managing dependencies, this is the recommended go-to package manager.

-  [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally:

`npm install -g @angular/cli`

- all the dependecies needed:

run `npm install` int the project folder
 
To run a dev server use `ng serve` command and navigate to `http://localhost:4200/` in your browser - any local changes will be automatically updated.

## Built With


-  [Angular 8](https://angular.io/) - The web framework

-  [NGXS](https://www.ngxs.io/) - State management library and pattern
  
## Highlights

- Fields `Title`, `Description`, `Starts on`, and `Responsible` are mandatory.
- `Description` field has 140 character limit and counter below (with color change after reaching the limit)
- App is responsive (from 320px up).
- Events can’t be created prior to the actual date (validation + input style changes for invalid values).
- `Time` field accepts 12h time format but on the output date is formatted as YYYY-MM-DDTHH:mm in 24h format
- Field `Payment` is mandatory in case of paid events, and `Fee` input appears only when payment field is filled
- Select options are fetched from fake API (My JSON Server).
- `Coordinator` field has a default selected option with currently logged in user (id = 3).
- The `Email` field's format is validated.
- logged data structure:

{
  title: string,
  description: string,
  category_id?: number,
  paid_event: boolean,
  event_fee?: number,
  reward?: number,
  date: string, // format: YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration?: number, // in seconds
  coordinator: {
    email?: string,
    id: string,
}
