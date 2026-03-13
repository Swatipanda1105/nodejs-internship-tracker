
async function addInternship(){
const company = document.getElementById("company").value;
const role = document.getElementById("role").value;
const status = document.getElementById("status").value;

await fetch("/api/internships", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ company, role, status })
});

loadInternships();
}

async function loadInternships(){
const res = await fetch("/api/internships");
const data = await res.json();

const list = document.getElementById("list");
list.innerHTML = "";

data.forEach(i => {
const li = document.createElement("li");
li.textContent = i.company + " - " + i.role + " (" + i.status + ")";
list.appendChild(li);
});
}

loadInternships();
