// Patient Journey scripts 

// author: elliott@glantz.net 

const vid = qs(".pj-video video");
const grid = qs(".pj-grid");
let vw, vh, isMobile, sections;

function GetViewPortSize(){
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let prev = isMobile;
    if(vw < 1200) isMobile = true;
    else isMobile = false;
    if(prev != undefined && prev != isMobile) location.reload();
}

function ResizeGrid(){
    vid.setAttribute("width", vw);
    vid.setAttribute("height", vw*0.5625);
    grid.style.height = `${vw*0.5625}px`;
}

function ActivateGrid(){
    for(let i = 0; i < sections.length; i++){
        sections.forEach(s => {
            s.classList.remove("open-section");
            s.setAttribute("tabindex", "0");
        });
        window.addEventListener("keyup", (e) => {
            if(e.keyCode == 13) document.activeElement.click();
        });
        sections[i].style.width = `${vw/sections.length}px`;
        let h2 = NewElement("h2", false, false);
        let icon = NewElement("img", ["plus-icon"], false);
        icon.setAttribute("src", "assets/img/circplus.svg");
        sections[i].appendChild(h2);
        sections[i].appendChild(icon);
        let gridTemplate = "";
        for(let j = 1; j <= i; j++) gridTemplate += "60px ";
        gridTemplate += "auto";
        for(let k = i + 1; k < sections.length; k++) gridTemplate += " 60px";
        ael(sections[i], "click", () => {
            if(!sections[i].classList.contains("open-section")){
                sections.forEach(s => s.classList.remove("open-section"));
                if(!isMobile) grid.style.gridTemplateColumns = gridTemplate;
                if(!isMobile) grid.classList.add("vertical-text");
                let index = sections[i].getAttribute("data-idx") - 1;
                for(a = 0; a < sections.length; a++) if(a != index) {
                    if(!isMobile) sections[a].style.width = "60px";
                    else sections[a].style.height = "60px";
                }
                let gradient = ["#2c9942 ","#fce200 ","#f18a00 ","#e12518 ","#df1683 ","#a25eb5 ","#004987 ","#5eb3e4 "];
                let gradientString;
                if(isMobile) gradientString = "";
                else{
                    let gradientCountingUp = 30;
                    for(let p = 0; p <= index; p++){
                        gradient[p] = `${gradient[p]}${gradientCountingUp}px`;
                        if(p == index) gradient[p] += `, ${gradient[p].substring(0,7)} `;
                        gradientCountingUp += 60;
                    }
                    let gradientCountingDown = vw - 30;
                    for(let l = sections.length - 1; l >= index; l--){
                        gradient[l] = `${gradient[l]}${gradientCountingDown}px`;
                        gradientCountingDown -= 60;
                    }
                    gradientString = "linear-gradient(to right, ";
                    for(let m = 0; m < gradient.length; m++) gradientString += `${gradient[m]}, `;
                    gradientString += "#2c9942 103.125%)";
                }
                qs(".pj-gradient").style.background = gradientString;
                sections[i].style.borderColor = "rgba(0, 160, 223, 0.5)";
                RenderInternalContent(index + 1);
                if(!isMobile) sections[index].style.width = `${vw - (60*(sections.length - 1))}px`;
                else{
                    sections[index].style.height = `${GetDimensions(sections[index].children[2]).height}px`;
                    if(sections[i].children[2]) sections[i].children[2].style.borderLeft = `6px solid ${gradient[i]}`; 
                }
                setTimeout( () => { if(qs(".pj-internal-content")) qs(".pj-internal-content").classList.add("fade-in"); }, 2);
                let closeButton = qs(".cat_close");
                ael(closeButton, "click", () => { CloseCategory(index); });
                sections[index].classList.add("open-section");
            }
        });
    }
}

function RenderInternalContent(category){
    const c = qs(`.pj-section[data-idx='${category}']`);
    qsa(".pj-internal-content").forEach(int => { int.remove(); });
    const internalContainer = NewElement("div", ["pj-internal-content", "hzero"], false);
    c.appendChild(internalContainer);
    const internalSidebar =  NewElement("div", ["pj-internal-sidebar"], false);
    internalContainer.appendChild(internalSidebar);
    NewElement("div", ["pj-internal-main"], internalSidebar);
    internalSidebar.appendChild(NewElement("img", false, false));
    qs(".pj-internal-sidebar img").setAttribute("src", fields.categories[category - 1].image);
    internalSidebar.appendChild(NewElement("p", false, false));
    qs(".pj-internal-sidebar p").innerHTML = fields.categories[category - 1].sidebarText;
    internalSidebar.appendChild(NewElement("a", false, false));
    qs(".pj-internal-sidebar a").innerHTML = fields.categories[category - 1].buttonText;
    qs(".pj-internal-sidebar a").setAttribute("href", fields.categories[category- 1].buttonLink);
    qs(".pj-internal-main").appendChild(NewElement("h3", false, false));
    qs(".pj-internal-main h3").innerHTML = "<img src='" + fields.categories[category - 1].icon + "'>" + fields.categories[category - 1].title;
    NewElement("h4", [], qs(".pj-internal-main h3"));
    qs(".pj-internal-main h4").innerHTML = fields.categories[category- 1].headline1;
    NewElement("p", [], qs(".pj-internal-main h4"));
    qs(".pj-internal-main p").innerHTML = fields.categories[category - 1].paragraphText1;
    NewElement("h4", [], qs(".pj-internal-main p"));
    qs(".pj-internal-main h4:nth-of-type(2)").innerHTML = fields.categories[category - 1].headline2;
    NewElement("p", [], qs(".pj-internal-main h4:nth-of-type(2)"));
    qs(".pj-internal-main p:nth-of-type(2)").innerHTML = fields.categories[category - 1].paragraphText2;
    NewElement("div", ["close-section-btn"], qs(".pj-internal-main"));
    qs(".close-section-btn").innerHTML = `<div class="cat_close"><div class="close-inner"><span></span><span></span></div></div>`;
    qs(".close-section-btn").setAttribute("tabindex", "0");
    ael(qs(".close-section-btn"), "click", CloseCategory);
    let subNav, r;
    if(!isMobile) subNav = NewElement("div", ["pj-internal-subnav"], qs(".pj-internal-main p:nth-of-type(2)"));
    else subNav = NewElement("div", ["pj-internal-subnav"], qs(".pj-internal-sidebar a"));
    for(v=0;v<4;v++){
        if(v<2) r = NewElement("a", [], false);
        else r = NewElement("div", [], false);
        qs(".pj-internal-subnav").appendChild(r); 
    }
    let snc = qsarray(".pj-internal-subnav a");
    snc.push(qs(".pj-internal-subnav div"));
    snc.push(qsa(".pj-internal-subnav div")[qsa(".pj-internal-subnav div").length - 1]);
    snc[0].setAttribute("tabindex", "0");
    snc[1].setAttribute("tabindex", "0");
    if(category == 1) snc[0].innerHTML = "&#8592; " + fields.categories[fields.categories.length - 1].title;
    else snc[0].innerHTML = "&#8592; " + fields.categories[category - 2].title;
    if(category >= fields.categories.length) snc[1].innerHTML = fields.categories[0].title + " &#8594;";
    else snc[1].innerHTML = fields.categories[category].title + " &#8594;";
    snc[2].innerHTML = "Previous";
    snc[3].innerHTML = "Next";
    ael(snc[2], "click", () => { snc[0].click(); });
    ael(snc[3], "click", () => { snc[1].click(); });
    if(isMobile){
        snc[0].innerHTML = snc[0].innerHTML.substring(2); 
        snc[1].innerHTML = snc[1].innerHTML.substring(0, snc[1].innerHTML.length - 1);
        snc[2].innerHTML = "&#8592; Previous";
        snc[3].innerHTML = "Next &#8594;";
        grid.classList.add("grayscale-bg");
        qs(".patient-journey").style.paddingBottom = "300px";
    }
    ael(snc[0], "click", () =>{ 
       if(category == 1) localStorage.setItem("OPENCAT", 7);
       else localStorage.setItem("OPENCAT", category - 2);
       location.reload();
    });
    ael(snc[1], "click", () =>{
       if(category == 8) localStorage.setItem("OPENCAT", 0);
       else localStorage.setItem("OPENCAT", category);
       location.reload();
    });
    let g = ["#2c9942","#fce200","#f18a00","#e12518","#df1683","#a25eb5","#004987","#5eb3e4"];
    let hextorbg = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g[category - 1]);
    let rbg = hextorbg ? {
        r: parseInt(hextorbg[1], 16),
        g: parseInt(hextorbg[2], 16),
        b: parseInt(hextorbg[3], 16)
      } : null;
    sections.forEach(s => {
        if(!isMobile){
            s.style.transition = "width 0.65s linear";
            s.style.background = "rgba(255,255,255,0.01)";
        }
    }); 
    setTimeout( () => { sections.forEach(s => {
        let dir;
        if(!isMobile) dir = "top";
        else dir = "left";
        if(s != c)s.style.background = `linear-gradient(to ${dir}, rgba(${rbg.r},${rbg.g},${rbg.b},0.375) 0%, rgba(${rbg.r},${rbg.g},${rbg.b},0.0) 50%`; 
        else s.style.background = "rgba(255,255,255,0.99)";
    });}, 100);
}

function CloseCategory(){
    grid.classList.remove("vertical-text");
    qs(".pj-gradient").style.background = "linear-gradient(to right, #2c9942 6.25%, #fce200 18.75%, #f18a00 31.25%, #e12518 43.75%, #df1683 56.25%, #a25eb5 68.75%, #004987 81.25%, #5eb3e4 93.75%, #2c9942 106.25%)";
    if(!isMobile) {
        for(let i = 0; i < sections.length; i++){sections[i].style.width = `initial !important`; }  
        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
        sections.forEach(s => { s.style.width = `${vw/sections.length}px`;});
    }
    else sections.forEach(s => { s.style.height = "60px";});
    if(qs(".pj-internal-content")) qs(".pj-internal-content").remove();
    if(isMobile){
        qs(".open-section .plus-icon").style.display = "block";
        qs(".open-section").style.borderColor = "rgba(0, 160, 223, 0.5)";
        for(let i = 0; i < sections.length; i++) sections[i].style.borderColor = "rgba(0, 160, 223, 0.5)";
        grid.classList.remove("grayscale-bg");
        qs(".patient-journey").style.paddingBottom = "220px";
    }
    setTimeout( () => {if(qs(".open-section")) qs(".open-section").classList.remove("open-section") }, 200);
    sections.forEach(s => { s.style.background = "initial"; });
}

function FillInitialContent(){
    document.querySelector('.pj-video video').playbackRate = 0.6;
    if(qs(".pj-headline")) qs(".pj-headline").innerHTML = fields.headline;
    if(qs(".pj-introtext")) qs(".pj-introtext").innerHTML = fields.introText;
    for(let i=0; i<sections.length; i++) sections[i].children[0].innerHTML = fields.categories[i].title;
    qs(".pj-video video").innerHTML = `<source src='${fields.video}' type='video/mp4'></source>`;
    CheckLocalStorage();
}

function CheckLocalStorage(){
    if(localStorage.getItem("OPENCAT")){
        let oc = sections[parseInt(localStorage.getItem("OPENCAT"))];
        oc.click();
        setTimeout( () => { window.scrollTo(0, oc.getBoundingClientRect().top + oc.ownerDocument.defaultView.pageYOffset - 18); }, 500);
        log(oc.getBoundingClientRect().top + oc.ownerDocument.defaultView.pageYOffset - 18);
        localStorage.clear();
    }
}

function InitializePatientJourney(){
    for(i=0; i < 8; i++){
        let pjs = NewElement("div", ["pj-section"], false);
        pjs.setAttribute("data-idx", i + 1);
        grid.appendChild(pjs);
    }
    sections = qsa(".pj-section");
    isMobile = undefined;
    ael(window, "resize", () => {
        GetViewPortSize();
        ResizeGrid();
    });
    GetViewPortSize();
    ResizeGrid();
    ActivateGrid();
}

InitializePatientJourney();