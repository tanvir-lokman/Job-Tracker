let currentTab = "all";
const tabActive = ["bg-blue-500", "border-blue-500", "text-white"]
const tabInactive = ["bg-transparent", "text-slate-500", "border-slate-200"]


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptystate = document.getElementById("empty-state")

// Tab Switching Function 

function switchTab(tab) {

    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if (t == tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];
    console.log(tab)

    for (const div of pages) {
        div.classList.add("hidden");
    }

    emptystate.classList.add("hidden");

    if (tab === 'all') {
        allContainer.classList.remove("hidden");
        if (allContainer.children.length < 1) {
            emptystate.classList.remove("hidden");
        }
    } else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
        if (interviewContainer.children.length < 1) {
            emptystate.classList.remove("hidden");
        }
    } else {
        rejectedContainer.classList.remove("hidden");
        if (rejectedContainer.children.length < 1) {
            emptystate.classList.remove("hidden");
        }
    }

    tabCount();
}

const totalCount = document.getElementById("Total-Count");
const totalInterviewCount = document.getElementById("Interview-Count");
const totalRejectedCount = document.getElementById("Rejected-Count");
const availableJobsCount = document.getElementById("available")

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function (event) {
    const clickElement = event.target;
    const card = clickElement.closest(".card");
    console.log(card);
    const parent = card.parentNode;
    const status = card.querySelector(".status");

// Card removing and adding in Interview and Reject Tab 

    if (clickElement.classList.contains("Interview-Btn")) {
        interviewContainer.appendChild(card);
        status.innerText = "Interview"
    }
    if (clickElement.classList.contains("Rejected-Btn")) {
        rejectedContainer.appendChild(card);
        status.innerText = "Reject"
    }
    if (clickElement.classList.contains("Trash-Btn")) {
        parent.removeChild(card);
    }
    tabCount();
});



function tabCount() {

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    };

    totalCount.innerText = counts["all"];
    totalInterviewCount.innerText = counts["interview"]
    totalRejectedCount.innerText = counts["rejected"]

    availableJobsCount.innerText = counts[currentTab];

    if (counts[currentTab] < 1) {
        emptystate.classList.remove("hidden")
    } else {
        emptystate.classList.add("hidden")
    }
}

tabCount();