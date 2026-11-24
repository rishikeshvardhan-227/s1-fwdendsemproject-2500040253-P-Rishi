// ================= MOBILE MENU =================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ================= DONOR REGISTRATION =================

document.getElementById("donorForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("donorName").value;
    const age = document.getElementById("donorAge").value;
    const blood = document.getElementById("donorBlood").value;
    const phone = document.getElementById("phone").value;

    const message = document.getElementById("donorMessage");


    if (age < 18) {

        message.style.color = "red";

        message.innerText =
            "Donor must be 18 years or older.";

        return;
    }


    if (phone.length !== 10) {

        message.style.color = "red";

        message.innerText =
            "Please enter a valid 10-digit phone number.";

        return;
    }


    message.style.color = "green";

    message.innerText =
        "✓ Donor registered successfully!";


    document.getElementById("donorForm").reset();

});


// ================= BLOOD REQUEST =================

document.getElementById("requestForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const hospital =
        document.getElementById("hospitalName").value;

    const blood =
        document.getElementById("requestBloodGroup").value;

    const units =
        document.getElementById("units").value;

    const priority =
        document.getElementById("priority").value;


    const message =
        document.getElementById("requestMessage");


    message.style.color = "green";

    message.innerText =
        "✓ Blood request submitted successfully!";


    console.log("Hospital:", hospital);
    console.log("Blood Group:", blood);
    console.log("Units:", units);
    console.log("Priority:", priority);


    document.getElementById("requestForm").reset();

});


// ================= BLOOD SEARCH =================

function searchBlood() {

    const input =
        document.getElementById("searchBlood");

    const filter =
        input.value.toUpperCase();

    const table =
        document.getElementById("bloodTable");

    const rows =
        table.getElementsByTagName("tr");


    for (let i = 1; i < rows.length; i++) {

        const bloodGroup =
            rows[i].getElementsByTagName("td")[0];

        if (bloodGroup) {

            const text =
                bloodGroup.textContent ||
                bloodGroup.innerText;


            if (text.toUpperCase().indexOf(filter) > -1) {

                rows[i].style.display = "";

            } else {

                rows[i].style.display = "none";

            }

        }

    }

}


// ================= REQUEST BUTTON =================

function requestBlood(bloodGroup) {

    document.getElementById("requestBloodGroup").value =
        bloodGroup;


    document.getElementById("request")
        .scrollIntoView({
            behavior: "smooth"
        });

}