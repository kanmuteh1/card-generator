let path_arr = window.location.pathname.split("/");
let ID = Number(path_arr[3])

let form = `<form method="POST" action="/card/edit/${ID}" enctype="multipart/form-data">
                <div class="title">
                    <i class="fas fa-pencil-alt"></i> 
                    <h2>Create Your Card</h2>
                </div>
                <div class="info">
                    <input type="file" name="img">
                    <input type="text" placeholder="John Brown" name="name">
                    <input type="text" placeholder="Company" name="company-name">
                    <input type="text" placeholder="Occupation" name="job-title">
                    <input type="date" placeholder="Date of birth" name="dob" style="color: white;">
                </div>
                <button type="submit">Submit</button>
            </form>`

document.getElementById("form").insertAdjacentHTML("beforeend",form)