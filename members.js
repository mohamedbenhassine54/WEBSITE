const members = {
  mohamed: {
    name: "Mohamed Ben Hassine",
    photo: "images/baba.jpg",
    birth: "03/11/1974",
    phone: "98478038"
  },
  junior: {
    name: "Mohamed Junior Ben Hassine",
    photo: "images/mohamed.jpg",
    birth: "31/05/2005",
    phone: "98705878"
  },
  adem: {
    name: "Adem Ben Hassine",
    photo: "images/edem.jpeg",
    birth: "31/05/2005",
    phone: "55376294"
  },
  rayen: {
    name: "Rayen Ben Hassine",
    photo: "images/rayen.jpeg",
    birth: "31/05/2005",
    phone: "55376173"
  },
  sarra: {
    name: "Sarra Ben Hassine",
    photo: "images/sara.jpg",
    birth: "30/08/2013",
    phone: "Not available"
  },
  fatma: {
    name: "Fatma Charni",
    photo: "images/mima.jpeg",
    birth: "10/10/1949",
    phone: "55375983"
  },
  mehrzia: {
    name: "Mehrzia Charni",
    photo: "images/omi.jpeg",
    birth: "27/11/1977",
    phone: "58468030"
  }
};

let currentMember = null;

function showDetails(memberKey) {
  currentMember = members[memberKey];
  if (!currentMember) return; // Safety check
  const memberDetails = document.getElementById("member-details");
  const memberName = document.getElementById("member-name");
  const memberInfo = document.getElementById("member-info");
  
  memberDetails.classList.remove("hidden");
  memberName.textContent = currentMember.name;
  memberInfo.innerHTML = ""; // Clear previous content
  // Optionally, display the photo by default when a member is selected
  showInfo('photo');
}

function showInfo(type) {
  if (!currentMember) return;
  const memberInfo = document.getElementById("member-info");
  memberInfo.innerHTML = ""; // Clear previous content
  if (type === "photo" && !currentMember[type].startsWith("📷")) {
    const img = document.createElement("img");
    img.src = currentMember[type];
    img.alt = `${currentMember.name}'s photo`;
    img.onerror = () => {
      memberInfo.textContent = "📷 [photo not available]";
    };
    memberInfo.appendChild(img);
  } else {
    memberInfo.textContent = currentMember[type];
  }
}