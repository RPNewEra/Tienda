document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000);

    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Handle all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            if (!targetId) return;

            e.preventDefault();
            
            // Update Nav Active State
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('href') === `#${targetId}`) l.classList.add('active');
            });

            // Update Section Active State
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            window.scrollTo(0, 0);
        });
    });

    // Vehicle Data
    const elegibles = [
        { name: "Mamba GT", img: "imagenes/Elegibles/BCs_VpSu.png" },
        { name: "Cuervo RS", img: "imagenes/Elegibles/BCs_VpNsgd.png" },
        { name: "Sylkris", img: "imagenes/Elegibles/BCs_VpMww22.png" },
        { name: "Vanta R", img: "imagenes/Elegibles/BCs_VpMlenli65.png" },
        { name: "Velaris", img: "imagenes/Elegibles/BCs_Vpm2kc21.png" },
        { name: "Grizzly", img: "imagenes/Elegibles/BCs_VpJgs22.png" },
        { name: "Dakor", img: "imagenes/Elegibles/Bcs_Vpfr2k19.png" },
        { name: "Mach V", img: "imagenes/Elegibles/BCs_VpFmenor.png" },
        { name: "Tempest", img: "imagenes/Elegibles/Bcs_VpDcdayf.png" },
        { name: "Nightrex", img: "imagenes/Elegibles/BCs_Mthr2z.png" },
        { name: "Ignyx", img: "imagenes/Elegibles/BCs_Mtkwgl.png" },
        { name: "Khyro", img: "imagenes/Elegibles/BCs_Hptsas80.png" },
        { name: "Orven", img: "imagenes/Elegibles/BCs_BzBB.png" },
        { name: "Onyx", img: "imagenes/Elegibles/BCs_VpArq82k.png" },
        { name: "Blitz GT", img: "imagenes/Elegibles/BCs_PsFmm1.png" }
    ];

    const exclusivos = [
        { name: "Nebula X", img: "imagenes/black/BCs_PsN35rgb.png", tag: "VIP BLACK" },
        { name: "Stratos X", img: "imagenes/Promo mes/Mes Beta/BCs_Mtkm1kr.png", tag: "BETA PROMO" },
        { name: "Tetsuo", img: "imagenes/Promo mes/Mes Beta/BCs_HpTsvz99.png", tag: "BETA PROMO" },
        { name: "Braknor", img: "imagenes/Promo mes/Mes Beta/BCs_PsRv80g.png", tag: "BETA PROMO" },
        { name: "Ryden", img: "imagenes/Inicial/BCs_VpMle9t.png", tag: "PACK INICIO" }
    ];

    const elegiblesGrid = document.getElementById('elegibles');
    const exclusivosGrid = document.getElementById('exclusivos');

    function createVehicleCard(veh) {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.innerHTML = `
            <div class="veh-img" style="background-image: url('${veh.img}')">
                ${veh.tag ? `<span class="tag">${veh.tag}</span>` : ''}
            </div>
            <div class="veh-info">
                <h4>${veh.name}</h4>
            </div>
        `;
        return card;
    }

    if (elegiblesGrid) elegibles.forEach(veh => elegiblesGrid.appendChild(createVehicleCard(veh)));
    if (exclusivosGrid) exclusivos.forEach(veh => exclusivosGrid.appendChild(createVehicleCard(veh)));

    // Vehicle Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const grids = document.querySelectorAll('.vehicle-grid');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            grids.forEach(g => {
                g.classList.remove('active');
                if (g.id === target) g.classList.add('active');
            });
        });
    });
});
