/* =====================================================
   CLARINAILS SHOP
===================================================== */

/*
========================================================
WHATSAPP
========================================================

Poné acá el número de la propietaria.
Paraguay = 595
Ejemplo: 595981123456 (Sin +, espacios ni guiones).
*/

const WHATSAPP_NUMBER = "595971670704";


/* =====================================================
   PRODUCTOS (Tus 75 productos reales)
===================================================== */

const products = [
    {
        id: 1,
        name: "Decoración para Uñas Charm Limit",
        price: 25000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_002.jpg"
    },
    {
        id: 2,
        name: "Aceite Revitalizador de Cutículas Eloise",
        price: 12000,
        category: "Cuidado de Uñas",
        image: "./images/ClariShop_003.jpg"
    },
    {
        id: 3,
        name: "Aceite Revitalizador de Cutículas Eloise",
        price: 15000,
        category: "Cuidado de Uñas",
        image: "./images/ClariShop_005.jpg"
    },
    {
        id: 4,
        name: "Polímero Acrílico QBD White",
        price: 60000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_007.jpg"
    },
    {
        id: 5,
        name: "Polvo Acrílico Acryfine Summer Style (Clear)",
        price: 130000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_009.jpg"
    },
    {
        id: 6,
        name: "Polímero Acrílico de Colores Eloise",
        price: 45000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_011.jpg"
    },
    {
        id: 7,
        name: "Polvo Acrílico Acryfine Summer Style (Cover)",
        price: 130000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_013.jpg"
    },
    {
        id: 8,
        name: "Polvo Acrílico Professional Navi 1154",
        price: 80000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_015.jpg"
    },
    {
        id: 9,
        name: "Polvo Acrílico Professional Navi 1614",
        price: 80000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_017.jpg"
    },
    {
        id: 10,
        name: "Polvo Acrílico Professional Navi 1123",
        price: 80000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_019.jpg"
    },
    {
        id: 11,
        name: "Polímero Acrílico Eloise (30g)",
        price: 45000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_021.jpg"
    },
    {
        id: 12,
        name: "French Dip Powder Holder",
        price: 15000,
        category: "Accesorios y Herramientas para Uñas",
        image: "./images/ClariShop_023.jpg"
    },
    {
        id: 13,
        name: "Base Gel Long Lasting Navi (10ml)",
        price: 45000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_025.jpg"
    },
    {
        id: 14,
        name: "Base Gel Long Lasting Navi (15ml)",
        price: 60000,
        category: "Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_027.jpg"
    },
    {
        id: 15,
        name: "Victoria's Secret Amber Romance Shimmer Mist + Loción (y Set Facial)",
        price: 0,
        category: "Cuidado Corporal / Perfumería",
        image: "./images/ClariShop_029.jpg"
    },
    {
        id: 16,
        name: "Decoración Nails Mirror Eloise",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_031.jpg"
    },
    {
        id: 17,
        name: "Decoración Nails Mirror Eloise (Set de 6 piezas)",
        price: 60000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_033.jpg"
    },
    {
        id: 18,
        name: "Navi Builder Gel 4 en 1 (20ml)",
        price: 80000,
        category: "Geles de Construcción",
        image: "./images/ClariShop_007.jpg"
    },
    {
        id: 19,
        name: "Set de Pinzas / Clips para Remover Esmalte Eloise",
        price: 60000,
        category: "Accesorios y Herramientas para Uñas",
        image: "./images/ClariShop_037.jpg"
    },
    {
        id: 20,
        name: "Cápsula Dual Acrygel Nail Forms - Paris Night",
        price: 390000,
        category: "Insumos para Uñas Acrílicas / Dual System",
        image: "./images/ClariShop_007.jpg"
    },
    {
        id: 21,
        name: "Alicate Profesional para Cutículas Eloise",
        price: 25000,
        category: "Herramientas y Accesorios para Manicuría",
        image: "./images/ClariShop_043.jpg"
    },
    {
        id: 22,
        name: "Cortaúñas Metálico con Lima Incorporada",
        price: 5000,
        category: "Herramientas y Accesorios para Manicuría",
        image: "./images/ClariShop_045.jpg"
    },
    {
        id: 23,
        name: "Loción Corporal Perfumada Victoria's Secret (Variedades)",
        price: 50000,
        category: "Cuidado Corporal / Perfumería",
        image: "./images/ClariShop_047.jpg"
    },
    {
        id: 24,
        name: "Vasito Dappen de Vidrio (Pack de 2)",
        price: 5000,
        category: "Accesorios e Insumos para Uñas Acrílicas",
        image: "./images/ClariShop_049.jpg"
    },
    {
        id: 25,
        name: "Set de Dijes y Joyería para Uñas (Fashion Nail Jewelry)",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_051.jpg"
    },
    {
        id: 26,
        name: "Apliques Holográficos y Flores City Girl (Nail Art)",
        price: 25000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_053.jpg"
    },
    {
        id: 27,
        name: "Surtido de Dijes Kawaii y Lazos KekeStar (Nail Art)",
        price: 25000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_056.jpg"
    },
    {
        id: 28,
        name: "Dedos de Práctica de Silicona con Uña",
        price: 10000,
        category: "Accesorios de Práctica para Manicuría",
        image: "./images/ClariShop_058.jpg"
    },
    {
        id: 29,
        name: "Dispensador Pump con Tapa Rosada (Frasco con Bomba)",
        price: 15000,
        category: "Accesorios e Insumos para Uñas",
        image: "./images/ClariShop_060.jpg"
    },
    {
        id: 30,
        name: "Polvo Efecto Espejo City Girl Nail Powder",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_062.jpg"
    },
    {
        id: 31,
        name: "Polvo Efecto Espejo y Aurora Set x4 (Nail Art)",
        price: 35000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_064.jpg"
    },
    {
        id: 32,
        name: "Polvo Cromo / Efecto Espejo Eloise",
        price: 15000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_066.jpg"
    },
    {
        id: 33,
        name: "Polvo Cromo Mirror Powder City Girl",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_068.jpg"
    },
    {
        id: 34,
        name: "Polvo Efecto Espejo y Holográfico City Girl",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_070.jpg"
    },
    {
        id: 35,
        name: "Polvo Efecto Espejo Metálico Charm Limit",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_072.jpg"
    },
    {
        id: 36,
        name: "Set x6 Polvos Efecto Espejo y Decoraciones Eloise",
        price: 60000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_074.jpg"
    },
    {
        id: 37,
        name: "Empujador de Cutículas Metálico Doble de Acero Inoxidable",
        price: 10000,
        category: "Herramientas y Accesorios para Manicuría",
        image: "./images/ClariShop_076.jpg"
    },
    {
        id: 38,
        name: "Esmalte Semipermanente UV/LED Charm Limit (10ml)",
        price: 20000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_078.jpg"
    },
    {
        id: 39,
        name: "Esmalte Semipermanente UV/LED Charm Limit Individual (10ml)",
        price: 17000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_080.jpg"
    },
    {
        id: 40,
        name: "Caja de Esmaltes Semipermanentes UV/LED Charm Limit (12 PCS)",
        price: 180000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_082.jpg"
    },
    {
        id: 41,
        name: "Liner Gel UV/LED Charm Limit (10ml)",
        price: 15000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_084.jpg"
    },
    {
        id: 42,
        name: "Color Gel LED/UV Soak-Off Heart Bottle Charm Limit (5ml)",
        price: 15000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_086.jpg"
    },
    {
        id: 43,
        name: "Color Gel LED/UV Charm Limit (11ml)",
        price: 17000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_088.jpg"
    },
    {
        id: 44,
        name: "Color Gel LED/UV Glitter / Brillos Charm Limit (10ml)",
        price: 25000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_090.jpg"
    },
    {
        id: 45,
        name: "Laser Drill UV/LED Charm Limit (10ml)",
        price: 25000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_092.jpg"
    },
    {
        id: 46,
        name: "Gel Polish Vía Láctea Navi (10ml)",
        price: 20000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_094.jpg"
    },
    {
        id: 47,
        name: "Gel Polish Aurora Navi (6ml - 8ml)",
        price: 40000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_096.jpg"
    },
    {
        id: 48,
        name: "Lima Banana para Uñas Grano 100/150",
        price: 10000,
        category: "Herramientas y Accesorios para Manicuría",
        image: "./images/ClariShop_098.jpg"
    },
    {
        id: 49,
        name: "Set de Holográficos en forma de Estrella (Nail Art)",
        price: 10000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_100.jpg"
    },
    {
        id: 50,
        name: "Set de Glitter y Efectos Holográficos en Pote",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_102.jpg"
    },
    {
        id: 51,
        name: "The Floral Vibes - Flores Secas para Uñas City Girl",
        price: 25000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_104.jpg"
    },
    {
        id: 52,
        name: "Set x2 Cajas de Decoraciones Variadas y Apliques para Uñas",
        price: 25000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_106.jpg"
    },
    {
        id: 53,
        name: "Fresa / Punta de Diamante Metálica Plana para Torno",
        price: 2000,
        category: "Herramientas y Accesorios para Manicuría",
        image: "./images/ClariShop_108.jpg"
    },
    {
        id: 54,
        name: "Set x4 Fresas / Puntas Cerámicas y de Tungsteno para Torno",
        price: 1000000,
        category: "Herramientas y Accesorios para Manicuría",
        image: "./images/ClariShop_110.jpg"
    },
    {
        id: 55,
        name: "Solid Cream Gel Charm Limit (15ml)",
        price: 25000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_112.jpg"
    },
    {
        id: 56,
        name: "Gel para Construcción / UV/LED Gel Navi (15ml)",
        price: 60000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_114.jpg"
    },
    {
        id: 57,
        name: "Painting Gel UV/LED Navi (8ml)",
        price: 60000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_116.jpg"
    },
    {
        id: 58,
        name: "Set x3 Gel de Pintura / Painting Gel Eloise (8ml)",
        price: 15000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_118.jpg"
    },
    {
        id: 59,
        name: "Diamond Glue Gel UV/LED para Strass / Extensión Navi (20ml)",
        price: 0,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_120.jpg"
    },
    {
        id: 60,
        name: "Gel Refrescante Profundo Pedi Ice Gena con Eucalipto y Mentol (250ml)",
        price: 5000,
        category: "Cuidado de Pies / Pedicuría",
        image: "./images/ClariShop_122.jpg"
    },
    {
        id: 61,
        name: "Gel Spider Eloise White",
        price: 0,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_124.jpg"
    },
    {
        id: 62,
        name: "Gel Spider Eloise Black",
        price: 20000,
        category: "Esmaltes y Productos UV/LED",
        image: "./images/ClariShop_126.jpg"
    },
    {
        id: 63,
        name: "Potes de Glitter / Polvo para Uñas",
        price: 15000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_128.jpg"
    },
    {
        id: 64,
        name: "Set x6 Cajas de Decoración Holográfica para Uñas Eloise",
        price: 35000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_130.jpg"
    },
    {
        id: 65,
        name: "Set x4 Cajas de Diseños Surtidos de Glitter y Apliques",
        price: 35000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_132.jpg"
    },
    {
        id: 66,
        name: "Pote Individual de Glitter / Polvo Decorativo Eloise",
        price: 15000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_134.jpg"
    },
    {
        id: 67,
        name: "Set x6 Cajas Redondas de Apliques Estrellas y Glitter Eloise",
        price: 35000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_136.jpg"
    },
    {
        id: 68,
        name: "Set Potes de Efecto Espejo / Polvo para Uñas con Aplicador",
        price: 20000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_138.jpg"
    },
    {
        id: 69,
        name: "Organizador / Surtido a Granel de Potes con Decoraciones Variadas",
        price: 10000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_140.jpg"
    },
    {
        id: 70,
        name: "Set de Cajas Grandes x12 Compartimentos de Decoración Holográfica",
        price: 70000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_142.jpg"
    },
    {
        id: 71,
        name: "Set x12 Cajas de Decoración Variada / Apliques de Estrellas para Uñas",
        price: 7000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_143.jpg"
    },
    {
        id: 72,
        name: "Set x2 Blisters de Decoración y Apliques Surtidos Eloise",
        price: 80000,
        category: "Decoración de Uñas / Nail Art",
        image: "./images/ClariShop_145.jpg"
    },
    {
        id: 73,
        name: "Termo Stanley Color Lila / Violeta con Tapa y Manija",
        price: 0,
        category: "Accesorios y Varios",
        image: "./images/ClariShop_148.jpg"
    },
    {
        id: 74,
        name: "Cabina UV/LED Profesional Sun X5 Plus (Color Blanco)",
        price: 180000,
        category: "Equipamiento y Aparatología",
        image: "./images/ClariShop_149.jpg"
    },
    {
        id: 75,
        name: "Cabina UV/LED Profesional Sun X5 Plus (Color Rosado)",
        price: 180000,
        category: "Equipamiento y Aparatología",
        image: "./images/ClariShop_151.jpg"
    }
];


/* =====================================================
   ESTADO DEL CARRITO Y FILTROS
===================================================== */

let cart = JSON.parse(localStorage.getItem("clarinails-cart")) || [];
let selectedCategory = "Todos";


/* =====================================================
   FORMATO DE DINERO (GUARANÍES)
===================================================== */

function formatMoney(value) {
    return new Intl.NumberFormat("es-PY").format(value);
}


/* =====================================================
   GUARDAR CARRITO EN LOCALSTORAGE
===================================================== */

function saveCart() {
    localStorage.setItem("clarinails-cart", JSON.stringify(cart));
}


/* =====================================================
   PRODUCTOS FILTRADOS (CON CORRESPONDENCIA FLEXIBLE)
===================================================== */

function filteredProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase().trim();

    return products.filter(product => {
        const productCat = product.category.toLowerCase();
        const selectedCat = selectedCategory.toLowerCase();

        const categoryOK =
            selectedCategory === "Todos" ||
            productCat.includes(selectedCat) ||
            (selectedCategory === "Esmaltes" && (productCat.includes("esmalte") || productCat.includes("uv/led"))) ||
            (selectedCategory === "Uñas" && (productCat.includes("uñas") || productCat.includes("acrílica") || productCat.includes("gel"))) ||
            (selectedCategory === "Herramientas" && (productCat.includes("herramienta") || productCat.includes("manicuría") || productCat.includes("equipo"))) ||
            (selectedCategory === "Decoración" && (productCat.includes("decoración") || productCat.includes("nail art"))) ||
            (selectedCategory === "Accesorios" && (productCat.includes("accesorio") || productCat.includes("insumo"))) ||
            (selectedCategory === "Otros" && (productCat.includes("varios") || productCat.includes("perfumería") || productCat.includes("cuidado")));

        const searchOK =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search);

        return categoryOK && searchOK;
    });
}


/* =====================================================
   RENDERIZAR PRODUCTOS
===================================================== */

function renderProducts() {
    const container = document.getElementById("products");
    const noResults = document.getElementById("noResults");
    const counter = document.getElementById("productCounter");

    const list = filteredProducts();

    counter.textContent = list.length;

    if (list.length === 0) {
        container.innerHTML = "";
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    container.innerHTML = list.map(product => `
        <article class="product">
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3>${product.name}</h3>
                <div class="product-price">
                    ${product.price > 0 ? `Gs. ${formatMoney(product.price)}` : "Consultar precio"}
                </div>
                <button class="add-button" onclick="addToCart(${product.id})">
                    Agregar al carrito
                </button>
            </div>
        </article>
    `).join("");
}


/* =====================================================
   AGREGAR AL CARRITO
===================================================== */

function addToCart(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    openCart();
}


/* =====================================================
   CAMBIAR CANTIDAD
===================================================== */

function changeQuantity(id, amount) {
    const item = cart.find(product => product.id === id);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    renderCart();
}


/* =====================================================
   ELIMINAR PRODUCTO DEL CARRITO
===================================================== */

function removeProduct(id) {
    cart = cart.filter(product => product.id !== id);
    saveCart();
    renderCart();
}


/* =====================================================
   RENDERIZAR CARRITO
===================================================== */

function renderCart() {
    const container = document.getElementById("cartProducts");
    const empty = document.getElementById("emptyCart");
    const count = document.getElementById("cartCount");
    const totalElement = document.getElementById("cartTotal");

    let total = 0;
    let quantity = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        quantity += item.quantity;
    });

    count.textContent = quantity;
    totalElement.textContent = "Gs. " + formatMoney(total);

    empty.style.display = cart.length ? "none" : "block";

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div>
                <h4>${item.name}</h4>
                <p>${item.price > 0 ? "Gs. " + formatMoney(item.price) : "Precio a consultar"}</p>
                <div class="quantity">
                    <button onclick="changeQuantity(${item.id}, -1)">−</button>
                    <strong>${item.quantity}</strong>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove" onclick="removeProduct(${item.id})">Eliminar</button>
            </div>
            <strong>${item.price > 0 ? "Gs. " + formatMoney(item.price * item.quantity) : "Consultar"}</strong>
        </div>
    `).join("");
}


/* =====================================================
   ABRIR / CERRAR CARRITO
===================================================== */

function openCart() {
    document.getElementById("cart").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

function closeCart() {
    document.getElementById("cart").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", closeCart);


/* =====================================================
   EVENTOS DE CATEGORÍAS
===================================================== */

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        document.querySelectorAll(".category").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        renderProducts();
    });
});


/* =====================================================
   BUSCADOR
===================================================== */

document.getElementById("searchInput").addEventListener("input", renderProducts);


/* =====================================================
   BOTÓN WHATSAPP
===================================================== */
/* =====================================================
   BOTÓN WHATSAPP
===================================================== */

document.getElementById("sendWhatsApp").addEventListener("click", () => {
    if (!cart.length) {
        alert("El carrito está vacío.");
        return;
    }

    if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.includes("X")) {
        alert("Tenés que colocar el número de WhatsApp en script.js.");
        return;
    }

    let total = 0;
    let message = "Hola ClariNails 💅🏻\n\nQuiero realizar este pedido:\n\n";

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        message += `• ${item.name}\n` +
                   `  Cantidad: ${item.quantity}\n` +
                   (item.price > 0 ? `  Precio: Gs. ${formatMoney(subtotal)}\n\n` : `  Precio: consultar\n\n`);
    });

    message += "━━━━━━━━━━━━━━\n" +
               `TOTAL: Gs. ${formatMoney(total)}\n` +
               "━━━━━━━━━━━━━━\n\n" +
               "¿Podrían confirmarme disponibilidad?";

    // Construcción limpia y correcta de la URL de WhatsApp
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});
/* =====================================================
   MENÚ MOBILE
===================================================== */

document.getElementById("menuButton").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
});


/* =====================================================
   INICIALIZAR
===================================================== */

renderProducts();
renderCart();

/* =====================================================
   POP-UP DE ANUNCIO (APARECE UNA SOLA VEZ POR SESIÓN)
===================================================== */

window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalAnuncio");
    const btnCerrar = document.getElementById("cerrarAnuncio");

    // Verificar si el usuario ya vio el anuncio en esta pestaña/sesión
    const yaVioAnuncio = sessionStorage.getItem("anuncioVisto");

    if (!yaVioAnuncio && modal) {
        // Aparece a los 2 segundos (2000 milisegundos) de haber entrado
        setTimeout(() => {
            modal.classList.add("mostrar");
            // Guardamos en la sesión que ya se mostró para que no vuelva a saltar
            sessionStorage.setItem("anuncioVisto", "true");
        }, 2000);
    }

    // Cerrar al hacer clic en la "X"
    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            modal.classList.remove("mostrar");
        });
    }

    // Cerrar también si hacen clic fuera de la imagen (en el fondo oscuro)
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("mostrar");
            }
        });
    }
});