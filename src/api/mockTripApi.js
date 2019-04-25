import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trips = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref:
      "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref:
      "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref:
      "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = trip => {
  return replaceAll(trip.title, " ", "-");
};

class TripApi {
  static getAllTrips() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], trips));
      }, delay);
    });
  }

  static saveTrip(trip) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTripTitleLength = 1;
        if (trip.title.length < minTripTitleLength) {
          reject(`Title must be at least ${minTripTitleLength} characters.`);
        }

        if (trip.id) {
          const existingTripIndex = trip.findIndex(a => a.id == trip.id);
          trips.splice(existingTripIndex, 1, trip);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          trip.id = generateId(trip);
          trip.watchHref = `http://www.pluralsight.com/courses/${trip.id}`;
          trip.push(trip);
        }

        resolve(Object.assign({}, trip));
      }, delay);
    });
  }

  static deleteTrip(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTripToDelete = trips.findIndex(trip => {
          trip.id === tripId;
        });
        trips.splice(indexOfTripToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TripApi;
