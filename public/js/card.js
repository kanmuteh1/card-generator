let path_arr = window.location.pathname.split("/");
let ID = Number(path_arr[2])


function getCard(){
    fetch(`/card/${ID}`)
    .then(res => res.json())
    .then(data => {
        let card = `<div class="col" id="user-profile">
                        <div class="name">
                            <!-- Product image-->
                            <div class="card-pic">
                            <img src="/images/${data.img_url}" alt="">
                            </div>
                        </div>
                        <div class="profile">
                            <p>HELLO EVERYBODY,I AM</p>
                            <b><h4>${data.name}</h4></b>
                            <b><P>${data.job_title}</P></b>
                            <p>WORK AT <br> <b><p>${data.company_name}</p></b></p>
                            
                            <div class="call-to-action">
                                <a class="btn" href="/card/delete/${data.id_no}">Delete</a>
                                <a class="btn" href="/edit/view/${data.id_no}">Edit</a>
                            </div>
                        </div>
                    </div>`
                    
        document.getElementById("single-card").insertAdjacentHTML('beforeend', card)
    });
}

getCard()