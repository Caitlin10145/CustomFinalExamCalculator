const ClassOrderType = ["","","","","",""];
const GradeOrderType = ["","","","","",""];

let myString = "";
let IsHis = false;
let IsLang = false;
let IsElec = false;
let IsMath = false;
let IsSci = false;
let IsLA = false;

function getStr(){
  return myString;
}

function isG(x,y,z,q){
  if(x.length>0&&y.length>0&&z.length>0&&q.length>0){
    return true;
  }
  return false;
}

function findGrades(Hname,hh,hw,hn,Lname,lh,lw,ln,Ename,eh,ew,enn,Mname,mh,mw,mn,Sname,sh,sw,sn,ENname,enh,enw,ens) {
  myString = "hello world";
  IsHis = isG(Hname,hh,hw,hn);
  IsLang = isG(Lname,lh,lw,ln);
  IsElec = isG(Ename,eh,ew,enn);
  IsMath = isG(Mname,mh,mw,mn);
  IsSci = isG(Sname,sh,sw,sn);
  IsLA = isG(ENname,enh,enw,ens);
 
  //Grade you have, weight of final, grade you want
  //History
  const h = [parseFloat(hh), parseFloat(hw), parseFloat(hn)];
  //Language
  const l = [parseFloat(lh), parseFloat(lw), parseFloat(ln)];
  //Elective
  const e = [parseFloat(eh), parseFloat(ew), parseFloat(enn)];
  //Math
  const m = [parseFloat(mh), parseFloat(mw), parseFloat(mn)];
  //Science
  const s = [parseFloat(sh), parseFloat(sw), parseFloat(sn)];
  //English
  const en = [parseFloat(enh), parseFloat(enw), parseFloat(ens)];





 

  if(en[1] < 1){
    en[1] = en[1] * 100;
  }
  if(s[1] < 1){
    s[1] = s[1] * 100;
  }
  if(e[1] < 1){
    e[1] = e[1] * 100;
  }
  if(m[1] < 1){
    m[1] = m[1] * 100;
  }
  if(l[1] < 1){
    l[1] = l[1] * 100;
  }
  if(h[1] < 1){
    h[1] = h[1] * 100;
  }
  
  const gs = [[h[0], l[0], e[0], m[0], s[0], en[0]], [h[1], l[1], e[1], m[1], s[1], en[1]], [h[2], l[2], e[2], m[2], s[2], en[2]]];
  const subjects = [Hname, Lname, Ename, Mname, Sname, ENname];
    




    
  myString = (this.Grades(subjects, gs[0], gs[1], gs[2]));
  return myString;
}





function Grades(sub, grade, percent, gradeWant){
  const need = [];
  const aVarOfSomething = [IsHis,IsLang,IsElec,IsMath,IsSci,IsLA];
  for(let i = 0; i < sub.length; i++){
    need.push(this.gradeNeeded(grade[i], percent[i], gradeWant[i]));
  }
  const str = [];
  let logicSizeStr = 0;
  for(let i = 0; i < sub.length; i++){
    if(aVarOfSomething[i]){
      str[logicSizeStr] = sub[i] + ": " + need[i] + "%";
      logicSizeStr++;
    }
  }
  need.sort((a, b) => a - b);
  let s = "";
  const needer = [...need].reverse();
  let logicalStuff = 0
  for(let i = 0; i < needer.length; i++){
    for(let j = 0; j < str.length; j++){
      if((str[j].indexOf(needer[i] + "") !== -1)){
        ClassOrderType[logicalStuff] = getFirstHalf(str[j])[0];
        GradeOrderType[logicalStuff] = getFirstHalf(str[j])[1];
        logicalStuff++;
        s = s + str[j] + "</br>";
        str[j] = "";
        j = str.length;
      }
    }
  }
  return s;
}

function getFirstHalf(x){
  var part1 = x.substring(0, x.indexOf(" "));
  var part2 = x.substring(x.indexOf(" ") + 1);
  const theParts = [part1,part2];
  return theParts;
}

function round(x){
  const w = Math.floor(x * 1000);
  const y = w / 1000.0;
  return y;
}
function gradeNeeded(sub, current, percent, want){
  const p = percent / 100;
  const ans = current * (1 - p) - want;
  return sub + ": " + this.round(Math.abs(ans) / p) + "%";
}
function gradeNeeded(current, percent, want){
  const p = percent / 100;
  const ans = current * (1 - p) - want;
  return this.round(Math.abs(ans) / p);
}
function ncr(n, r){
  const p = n - r;
  const ns = new Array(p);
  for(let i = 0; i < p; i++){
    ns[i] = n - i;
  }
  let ans = 1;
  for(let i = 0; i < ns.length; i++){
    ns[i] = Math.floor(ns[i] / p);
    p--;
    ans = ans * ns[i];
  }
  return ans;
}


