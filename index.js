console.log(newFreelancer);

// Access the array of freelancers
console.log(freelancers);


// `setInterval` will call `addFreelancer` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addFreelancerIntervalId)` will stop the interval.
const addFreelancerIntervalId = setInterval(createFreelancer, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */


//Function to calculate average price of all freelancers
function averagePrice(){
  const sum = freelancers.reduce((total, current) => {
    return total + current.price;}, 0);
    // console.log("Sum",sum);
    const average = sum / freelancers.length;
    // console.log("average: ",average);
    return average;
};

//render function
function render() {
  // Render the freelancers

  const freelancerId = document.querySelector("#freelancer");
  freelancerId.innerHTML =
      `<tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Starting Price</th>
      </tr>`;

      freelancers.forEach((freelancer) => {
        //creates a new table row
        const tableRow = document.createElement("tr");
        //add td child element to the created tr
        const tdName = document.createElement("td");
        tdName.textContent = freelancer.name;
    
        const tdOccupation = document.createElement("td");
        tdOccupation.textContent = freelancer.occupation;
    
        const tdPrice = document.createElement("td");
        tdPrice.classList.add("price");
        tdPrice.textContent = `$${freelancer.price}`;
        //add all created td to the tr
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdOccupation);
        tableRow.appendChild(tdPrice);
    
        freelancerId.appendChild(tableRow);

        const average = document.querySelector("#average");
        average.innerHTML = `The average starting price is: $${averagePrice().toFixed()}`;
      });


    };


//function which creates a randomFreelancer 
function createFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * (71) + 20); // Generates random number between 20 and 90

  const randomFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice
  };

  // Append the new freelancer to the array
  freelancers.push(randomFreelancer); 

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}