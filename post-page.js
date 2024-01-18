let products = [
    // Liste des produits avec leurs détails
    {
        id: 1,
        title: 'Revamin Acne Cream',
        img: 'img/RevaminAcneCream.jpg',
        p1: 'The Revamin Acne Cream is an innovative solution for combating skin imperfections. Formulated with a blend of nourishing ingredients, this cosmetic is engineered to effectively eliminate blemishes while preventing the formation of new pimples.',
        p2: 'The advanced formula of the cream is designed to penetrate deep into the skin, providing comprehensive nourishment that leaves the skin not only free from imperfections but also remarkably supple and smooth.',
        lien: 'https://nplink.net/203s5hdg',
        p3: 'Specifically tailored for individuals grappling with problematic skin, Revamin Acne Cream proves versatile against various types of acne, addressing the root causes of skin issues. ',
        p4: 'Through consistent use, this product demonstrates its effectiveness in reducing pimples and imperfections, regulating sebum production, and alleviating redness and inflammation.',
        p5: 'Ideal for those aiming to maintain a healthy complexion, Revamin Acne Cream has become a sought-after cosmetic solution.'
    },
    // Ajoutez autant de produits que nécessaire
];

// Fonction pour générer les pages de produits
    for (let product of products) {
        let contantt = 
            `
        <section class="post-header">
            <div class="header-content post-container">
                <!-- Back To Home -->
                <a href="index.html" class="back-home">Back To Home</a>
                <!-- Title -->
                <h1 class="header-title">${product.title}</h1>
                <img src="${product.img}" alt="" class="header-img">
            </div>
        </section>
        <!-- Posts -->
        <section class="post-content post-container">
            <h2 class="sub-heading">Description :</h2>
            <p class="post-text">${product.p1}</p>
            <p class="post-text">${product.p2}</p>

            <button class="post-btn"><a href="${product.lien}" target="_blank" rel="noopener noreferrer">Add Amazon</a></button>
            <p class="post-text">${product.p3}</p>
            <p class="post-text">${product.p4}</p>
            <p class="post-text">${product.p5}</p>
        </section>
        <!-- Share -->
        <div class="share post-container">
            <span class="share-title"> Share this article</span>
            <div class="social">
                <a href="#"><i class="bx bxl-facebook"></i></a>
                <a href="#"><i class="bx bxl-twitter"></i></a>
                <a href="#"><i class="bx bxl-instagram"></i></a>
                <a href="#"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
        `
        document.getElementById("post-Content").innerHTML += contantt

    }
