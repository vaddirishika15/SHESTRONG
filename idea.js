import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhqV4zch0B-zp5l1a1ah98MNdr-gzFMJg",
  authDomain: "idea-bc04a.firebaseapp.com",
  databaseURL: "https://idea-bc04a-default-rtdb.firebaseio.com",
  projectId: "idea-bc04a",
  storageBucket: "idea-bc04a.appspot.com",
  messagingSenderId: "411515508801",
  appId: "1:411515508801:web:28edfae474b8da87ef0ec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to add a new thought to the Realtime Database
async function addThought(gmailId, thoughtContent) {
  try {
    const thoughtRef = ref(database, 'thoughts');
    const newThoughtRef = push(thoughtRef);
    await set(newThoughtRef, {
      gmailId: gmailId,
      content: thoughtContent,
      timestamp: new Date().toISOString()
    });
    console.log("Thought added successfully");
  } catch (error) {
    console.error("Error adding thought: ", error);
  }
}

// Event listener for form submission
document.getElementById("thoughtForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  const thoughtContent = document.getElementById("thoughtContent").value;
  const gmailId = document.getElementById("gmailAddress").value;
  await addThought(gmailId, thoughtContent);
  document.getElementById("thoughtContent").value = ""; // Clear the input field
  document.getElementById("gmailAddress").value = ""; // Clear the input field
});

// Function to fetch thoughts from Realtime Database and display them
function fetchThoughts() {
  const thoughtsContainer = document.getElementById("thoughtsContainer");
  const thoughtsRef = ref(database, 'thoughts');
  onValue(thoughtsRef, (snapshot) => {
    thoughtsContainer.innerHTML = ""; // Clear previous content
    snapshot.forEach((childSnapshot) => {
      const thought = childSnapshot.val();
      const thoughtElement = document.createElement("div");
      thoughtElement.classList.add("thought");
      thoughtElement.innerHTML = `<p><strong>${thought.gmailId}:</strong> ${thought.content}</p><small>${new Date(thought.timestamp).toLocaleString()}</small>`;
      thoughtsContainer.appendChild(thoughtElement);
    });
  });
}

// Fetch and display thoughts when the page loads
window.onload = fetchThoughts;