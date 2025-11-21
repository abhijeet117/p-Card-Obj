const people = [
  {
    name: "Neha Kakkar",
    company: "Google",
    role: "Frontend Developer",
    rate: "$100/hr",
    location: "Delhi, India",
    image:
      "https://media.istockphoto.com/id/2192400753/photo/portrait-of-teenage-girl-at-home.jpg?s=612x612&w=is&k=20&c=JrUqFg_neqYIJBiE3Jdw1e5AhjzQ6QPHhcnoAxTcnhA=",
  },
  {
    name: "Rohit Sharma",
    company: "Microsoft",
    role: "Backend Developer",
    rate: "$80/hr",
    location: "Mumbai, India",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Aisha Khan",
    company: "Amazon",
    role: "UI/UX Designer",
    rate: "$90/hr",
    location: "Bangalore, India",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Vikram Patel",
    company: "Tesla",
    role: "Full Stack Engineer",
    rate: "$120/hr",
    location: "Pune, India",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    name: "Sana Mirza",
    company: "Meta",
    role: "Product Designer",
    rate: "$110/hr",
    location: "Hyderabad, India",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Arjun Mehta",
    company: "Netflix",
    role: "Software Engineer",
    rate: "$95/hr",
    location: "Chennai, India",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
];

let main = document.querySelector("#main");
let sum = "";
people.forEach(function (elem) {
  elem = `<div class="card">
        <div class="col1">
            <img src="${elem.image}">
            <h2> <hr> ${elem.name} <hr></h2>
        </div>

        <div class="col2">
            <h3>${elem.company}</h3>
            <h2>${elem.role}</h2>
        </div>

        <div class="line">
            <hr>
        </div>

        <div class="col3">
            <div class="left">
                <h3 class="rate">
                    ${elem.rate}
                </h3>

                <p>${elem.location}</p>
            </div>

            <div class="right">
                <button>Apply now</button>
            </div>
        </div>
    </div>`;

  sum += elem;
  main.innerHTML = sum;
});
