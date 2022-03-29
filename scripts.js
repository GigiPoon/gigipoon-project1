const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nameBlog").value;

    const email = document.getElementById("emailBlog").value;

    const comment = document.getElementById("message").value;

    if (name && email && comment) {
        const listItem = document.createElement("div")

        const paragraph = document.createElement('p')

        paragraph.innerHTML =
            `
            <div class="flexComment">
                <div class="personTwo">
                    <img src="./beach-final-images/comment-image2.jpg"
                        alt="face of a women wearing orange sunglasses with her head slightly tilting towards the left">
                </div>
                <div class="commentOne">
                    <p>Tuesday October 10th, 2019 by ${name}</p>
                    <p>${email}</p>
                    <p>${comment}</p>
                </div>
            </div>
            `

        listItem.appendChild(paragraph)
        console.log(paragraph)

        document.querySelector('.results').appendChild(listItem)
        document.querySelector('.error').innerHTML = ("")

    }

    else {

        const paragraph = "wrong"

        document.querySelector('.error').innerHTML = ("Please fill out all the fields!")

        document.querySelector('.error').style.padding = "25px 0";

        document.querySelector(".error").style.color = "red";
    }

    blogForm.reset();

});