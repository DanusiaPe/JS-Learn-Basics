const names = ["YouTube", "facebook", "Instagram", "Netflix", "Amazon"];
// for of used for arrays
for(const n of names){
    console.log(n);
}


const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "facebook",
    lco: "LearnCodeOnline",
}
// for in used for objects
for ( const n in symbols){
    console.log(symbols[n]);
}