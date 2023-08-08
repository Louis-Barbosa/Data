function displayRandomUser(userData) {
    const userCardContainer = document.getElementById("userCardContainer");
    userCardContainer.innerHTML = "";
  
    const randomUserIndex = Math.floor(Math.random() * userData.results.length);
    const user = userData.results[randomUserIndex];
  
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
  
    const userImage = document.createElement("img");
    userImage.src = user.picture.large;
    userCard.appendChild(userImage);
  
    const userName = document.createElement("h2");
    userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
    userCard.appendChild(userName);
  
    const userGender = document.createElement("p");
    userGender.textContent = `Gender: ${user.gender}`;
    userCard.appendChild(userGender);
  
    const userNationality = document.createElement("p");
    userNationality.textContent = `Nationality: ${user.nat}`;
    userCard.appendChild(userNationality);
  
    const userDob = document.createElement("p");
    userDob.textContent = `Date of Birth: ${new Date(user.dob.date).toLocaleDateString()}`;
    userCard.appendChild(userDob);
  
    const userRegistrationDate = document.createElement("p");
    userRegistrationDate.textContent = `Registered: ${new Date(user.registered.date).toLocaleDateString()}`;
    userCard.appendChild(userRegistrationDate);
  
    const userPhone = document.createElement("p");
    userPhone.textContent = `Phone: ${user.phone}`;
    userCard.appendChild(userPhone);
  
    const userCell = document.createElement("p");
    userCell.textContent = `Cell: ${user.cell}`;
    userCard.appendChild(userCell);
  
    const userAddress = document.createElement("p");
    userAddress.textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
    userCard.appendChild(userAddress);
  
    userCardContainer.appendChild(userCard);
  }
  
  
  document.getElementById("showRandomUser").addEventListener("click", () => {
    displayRandomUser(data);
  });
  
 
  displayRandomUser(data);
  