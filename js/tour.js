AFRAME.registerComponent("tour", {
    schema: {
    state: { type: "string", default: "places-list" },
    selectedCard: { type: "string", default: "#card1" },
  },
    init: function () {
        this.placesContainer = this.el;
        this.createIcons();
    },


    tick: function () {
        const { state } = this.el.getAttribute("tour");

        if (state === "view") {
            this.hideEl([this.placesContainer]);
            this.showView();
        }
    },
    hideEl: function (elList) {
        elList.map(el => {
            el.setAttribute("visible", false);
        });
    },

    showView: function () {
        const { selectedCard } = this.data;
        
        const skyEl = document.querySelector("#main-container");
        skyEl.setAttribute("material", {
            src: `./assets/${selectedCard}`,
            color: "white"
        });
    },

    createIcons: function () {
        const icons = [
            {
                id: "taj-mahal",
                title: "Taj Mahal",
                url: "./assets/taj_mahal.jpg",
            },

            {
                id: "charminar",
                title: "Charminar",
                url: "./assets/charminar.jpg",
            },

            {
                id: "elephanta-caves",
                title: "Elephanta Caves",
                url: "./assets/Elephanta_Caves.jpg",
            },

            {
                id: "ellora-caves",
                title: "Ellora Caves",
                url: "./assets/Ellora Caves.jpg",
            },

            {
                id: "warangal-fort",
                title: "Warangal Fort",
                url: "./assets/Warangal Fort.jpg",
            },

            {
                id: "humayans-tomb",
                title: "Humayans Tomb",
                url: "./assets/humayans_tomb.jpg"
            },

            {
                id: "la-martiniere",
                title: "La Martiniere",
                url: "./assets/La Martiniere.jpg",
            },

            {
                id: "lotus-temple",
                title: "Lotus Temple",
                url: "./assets/Lotus Temple.jpg",
            },

            {
                id: "modhera-sun-temple",
                title: "Modhera Sun Temple",
                url: "./assets/Sun Temple.jpg",
            },

            {
                id: "viswanath-temple",
                title: "Viswanath Temple",
                url: "./assets/Viswanath Temple.jpg",
            },

            {
                id: "mahabalipuram",
                title: "Mahabalipuram",
                url: "./assets/mahabalipuram.jpg",
            },

            {
                id: "statue-of-unity",
                title: "Statue Of Unity",
                url: "./assets/Statue Of Unity.jpg",
            },

            {
                id: "uthirakosamangai-temple",
                title: "Uthirakosamangai Temple",
                url: "./assets/Uthirakosamangai Temple.jpg",
            },
        ]
        let previousXPosition = -80
        for (var x of icons) {
            const posX = previousXPosition + 50;
            const posY = -60;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ }
            previousXPosition = posX

            const borderEl = this.createborder(position, x.id)

            const Icon = this.createThumbnail(x)
            borderEl.appendChild(Icon)

            const titleEl = this.createTitle(position, x)
            borderEl.appendChild(titleEl)

            this.placesContainer.appendChild(borderEl)
        }

    },
    createborder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 42,
            height: 30
        });

        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: "purple",
            opacity: 1,
        });
        entityEl.setAttribute("cursor-listener", {});

        return entityEl;
    },
    createThumbnail: function (x) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 40,
            height: 28
        });

        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
        entityEl.setAttribute("material", { src: x.url });
        return entityEl;
    },
    createTitle: function (position, x) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            align: "center",
            width: 80,
            color: "black",
            value: x.title,
        });
        const elPosition = position;
        elPosition.y = -100;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    }
})