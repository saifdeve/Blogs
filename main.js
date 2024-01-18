// Filter JS
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");

        // Add or remove the "active-filter" class
        $(this).addClass("active-filter").siblings().removeClass("active-filter");

        if (value === "all") {
            appelPagination();
        } else {
            $(".post-box").hide("1000");
            $(".post-box." + value).show("1000");
            appelPagination(value); // Passer la catégorie sélectionnée à appelPagination
        }
    });

    // Header BackGround Change On Scroll
    let Header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        Header.classList.toggle("shadow", window.scrollY > 0);
    });

    // Initialize the filter for "All" on page load
    $(".filter-item[data-filter='all']").click();
});


// ----
function choixColor() {
    const colorMap = {
        "health": "blue",
        "tech": "red",
        "design": "brown"
        // Add more mappings as needed
    };

    return colorMap[card.tag] || ''; // Return the color or an empty string if no match
}
// ----
// Cards
let cards = [
    {
        "tag" : "health",
        "img" : "img/RevaminAcneCream.jpg",
        "category" : "Health",
        "title" : "Revamin Acne Cream",
        "date" : new Date().toLocaleDateString(),
        "description" : "Revamin Acne Cream combats skin imperfections with its innovative formula. It nourishes deeply, leaving skin supple and smooth. Tailored for problematic skin, it reduces pimples, regulates sebum, and alleviates redness. Ideal for a healthy complexion, it's a sought-after cosmetic solution.",
        "img_profil" : "img/profile-1.jpg",
        "name_profil" : "Megatone Teams"
    },
    {
        "tag" : "tech",
        "img" : "img/post-2.jpg",
        "category" : "Tech",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-2.jpg",
        "name_profil" : "Marques Brown"
    },
    {
        "tag" : "design",
        "img" : "img/post-3.jpg",
        "category" : "Design",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-3.jpg",
        "name_profil" : "Marques Brown"
    },
    {
        "tag" : "mobile",
        "img" : "img/post-4.jpg",
        "category" : "Mobile",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-1.jpg",
        "name_profil" : "Marques Brown"
    },
    {
        "tag" : "tech",
        "img" : "img/post-5.jpg",
        "category" : "Tech",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-1.jpg",
        "name_profil" : "Marques Brown"
    },
    {
        "tag" : "design",
        "img" : "img/post-6.jpg",
        "category" : "Design",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-1.jpg",
        "name_profil" : "Marques Brown"
    },
    {
        "tag" : "mobile",
        "img" : "img/post-7.jpg",
        "category" : "Mobile",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-1.jpg",
        "name_profil" : "Marques Brown"
    },
    {
        "tag" : "tech",
        "img" : "img/post-8.jpg",
        "category" : "Tech",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-1.jpg",
        "name_profil" : "Marques Brown"
    },
    {
        "tag" : "design",
        "img" : "img/post-9.jpg",
        "category" : "Design",
        "title" : "How To Create  UX Design With Adobe XD",
        "date" : "12 Feb 2024",
        "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, saepe non. Vel, ducimus quisquam aut culpa numquam soluta, eligendi nesciunt nihil cupiditate amet tempore asperiores. Provident vel distinctio magnam eos.",
        "img_profil" : "img/profile-1.jpg",
        "name_profil" : "Marques Brown"
    }
]

for(card of cards){
    let color = choixColor();
    let contant = 
    `
        <div  class="post-box ${card.tag}" style="display:none">
            <img src=${card.img} alt="" class="post-img">
            <h2 class="category tag-${color}">${card.category}</h2>
            <a href="post-page.html" class="post-title">
                ${card.title}
            </a>
            <span class="post-date">${card.date}</span>
            <p class="post-description">${card.description}</p>
            <!-- Profile -->
            <div class="profile">
                <img src=${card.img_profil} alt="" class="profile-img">
                <span class="profile-name">${card.name_profil}</span>
            </div>
        </div>
    `
    document.getElementById("post-container").innerHTML += contant
}

// Pagination
function appelPagination(category) {
    $(function () {
        var $postBoxes;
        if (category && category !== 'all') {
            // Si une catégorie est spécifiée, filtrer les éléments par catégorie
            $postBoxes = $(".post .post-box." + category);
        } else {
            // Sinon, tous les éléments
            $postBoxes = $(".post .post-box");
        }

        var numberOfItems = $postBoxes.length;
        console.log(numberOfItems);
        var limitPerPage = 6; // Nombre d'articles visibles par page
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 7; // Nombre d'éléments de pagination visibles
        var currentPage;

        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false;
            currentPage = whichPage;
            $postBoxes.hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
            $(".pagination li").slice(1, -1).remove();
            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                    .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                        .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
            });
            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPages);
            return true;
        }

        $(".pagination").append(
            $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
            $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
        );

        showPage(1);

        $(document).on("click", ".pagination li.current-page:not(.active)", function () {
            return showPage(+$(this).text());
        });

        $(".next-page").on("click", function () {
            return showPage(currentPage + 1);
        });

        $(".previous-page").on("click", function () {
            return showPage(currentPage - 1);
        });
    });
}

function getPageList(totalPages , page , maxLength){
    function range(start, end){
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1 ;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1 ;

    if (totalPages <= maxLength){
        return range(1 , totalPages);
    }
    if(page <= maxLength - sideWidth -1 - rightWidth){
        return range(1,maxLength - sideWidth -1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
    if(page >= totalPages - sideWidth -1 - rightWidth){
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth - totalPages));
    }
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}
appelPagination()