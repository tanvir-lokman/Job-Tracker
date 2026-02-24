let interviewlist = [];
let rejectedlist = [];


let total = document.getElementById("Total-Count");
let interview = document.getElementById("Interview-Count");
let rejected = document.getElementById("Rejected-Count");

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


const allCardSection = document.getElementById("allCards")
const sectionContainer = document.querySelector('section')
const filterSection = document.getElementById('Filtered-Section')


function calculateCount() {
    total.innerText = allCardSection.children.length;
    interview.innerText = interviewlist.length;
    rejected.innerText = rejectedlist.length;
}
calculateCount()

function togglesStyle(id) {
    // removing bg and text colour
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    // adding bg and text colour
    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]', 'border-2', 'border-gray-200')
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    // console.log(id);

    const selected = document.getElementById(id)
    // console.log(selected);

    // adding bg for selected btn 
    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
}


sectionContainer.addEventListener('click', function (event) {

    // console.log(event.target.parentNode)

    // console.log(event.target.classList.contains('Interview-Btn'));

    if (event.target.classList.contains('Interview-Btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const Companyname = parenNode.querySelector('.companyName').innerText
        const Position = parenNode.querySelector('.position').innerText
        const Jobtype = parenNode.querySelector('.jobType').innerText
        const Status = parenNode.querySelector('.status').innerText
        const Description = parenNode.querySelector('.description').innerText
        parenNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            Companyname,
            Position,
            Jobtype,
            Status:'Interview',
            Description
        }

        const companyExixt = interviewlist.find(item => item.Companyname == cardInfo.Companyname);



        if (!companyExixt) {
            interviewlist.push(cardInfo)
        }

        calculateCount()

        visibleThiribing()
    }



});


function visibleThiribing() {

    filterSection.innerHTML = ''

    for (let inter of interviewlist) {

        console.log(inter)

        let div = document.createElement('div')
        div.className = `card flex justify-between bg-[#FFFFFF] border-2 border-gray-200 p-6 rounded-b-xl rounded-t-xl mt-4`
        div.innerHTML = `
        <div class="space-y-5">
                    <div>
                        <h1 class="companyName mb-2 font-bold text-[#002C5C]">${inter.Companyname}</h1>
                        <h2 class="position mb-5">${inter.Position}</h2>
                        <p class="jobType">${inter.Jobtype}</p>
                    </div>
                    <div>
                        <h1
                            class="status font-medium text-[#002C5C] p-2 bg-[#EEF4FF] w-[113px] rounded-b-sm rounded-t-sm">
                            ${inter.Status}</h1>
                    </div>
                    <div>
                        <h1 class="description
">${inter.Description}</h1>
                    </div>
                    <div>
                        <button
                            class="Interview-Btn text-[#10B981] border-2 border-[#10B981] py-2 px-3 rounded-b-sm rounded-t-sm mr-2">Interview</button>
                        <button
                            class="Rejected-Btn border-2 text-[#EF4444] border-[#EF4444] py-2 px-3 rounded-b-sm rounded-t-sm ">Rejected</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div)
    }
}