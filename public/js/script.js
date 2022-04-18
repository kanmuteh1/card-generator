function getCards(){
    let card_area = document.getElementById('cards-area');
    fetch('/cards')
    .then(res => res.json())
    .then(data => {
        data.forEach(ele => {
            let card = `<div class="col mb-5">
                            <div class="card h-100">
                                <!-- Product image-->
                                <img class="card-img-top" width="150" height="160" src="/images/${ele.img_url}" alt="..." />
                                <!-- Product details-->
                                <div class="card-body p-4">
                                    <div class="text-left">
                                        <!-- Product name-->
                                        <h5 class="fw-bolder">${ele.name}</h5>
                                        <!-- Product reviews-->
                                        <div class="d-flex justify-content-center small text-warning mb-2">
                                
                                        </div>
                                        <!-- Product price-->
                                    </div>
                                </div>
                                <!-- Product actions-->
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/single/${ele.id_no}">View More</a></div>
                                </div>
                            </div>
                        </div>`
            card_area.insertAdjacentHTML('beforeend', card)
        });
    });
}
getCards()